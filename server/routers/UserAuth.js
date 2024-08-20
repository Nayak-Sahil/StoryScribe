const UserAuthRouter = require("express").Router();
const conn = require("../database/connection");
const ResultPackage = require("../utility/ResultPackage");
const HandlerMail = require("../utility/NodeMailer");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const HashPassword = require("../utility/HashPassword");

UserAuthRouter.post("/identify-email", (req, res) => {
    const { email } = req.body;
    let ack = {};

    conn.query("SELECT * FROM users WHERE email=?", [email], async (error, results) => {
        if (error) {
            ack = new ResultPackage(results, "Something went wrong", error, 500);
        } else {
            if (results.length == 0) {
                // Not found any account with given email
                const token = jwt.sign({ email: email }, process.env.TOKEN_KEY, { expiresIn: 300 }); // 300 seconds 

                let userRegisterLink = process.env.DEV_URL + "auth/register/" + token;
                const subject = "Register to StoryScribe.";
                const message = `<!DOCTYPE html>
                                <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Email</title>
                                </head>
                                <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
                                    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                                        <div style="background-color: #3d8bde; color: #ffffff; padding: 10px 20px; text-align: center;">
                                            <h1 style="margin: 0; font-size: 24px;">StoryScribe</h1>
                                        </div>
                                        <div style="padding: 20px; font-size: 16px; color: #333333; line-height: 1.6;">
                                            <p style="margin: 0 0 20px;">Dear ${email},</p>
                                            <p style="margin: 0 0 20px;">Use the following link to create an account,</p>
                                            <p style="margin: 0 0 20px;">
                                                <a href="${userRegisterLink}" style="display: inline-block; padding: 10px 20px; background-color: #3d8bde; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">Click here to Register</a>
                                            </p>
                                            <p style="margin: 0 0 20px;">Or copy this url into your browser:</p>
                                            <a href="${userRegisterLink}" style="margin: 0 0 20px;">${userRegisterLink}</a>
                                            <p><strong>Note:</strong> The registration link is valid for only 5 minutes. After that, it will expire.</p>
                                            <p style="margin: 0;">If you did not request this registration, please ignore this email.</p>
                                        </div>
                                        <div style="padding: 20px; text-align: center; font-size: 12px; color: #777777;">
                                            <p style="margin: 0;">StoryScribe</p>
                                        </div>
                                    </div>
                                </body>
                                </html>;`;

                await HandlerMail.sendMail(process.env.EMAIL_NAME, email, subject, message).then((response) => {
                    ack = new ResultPackage(response, "Not found any account with given email.", error, 200);
                }).catch((error) => {
                    ack = new ResultPackage(null, "Not found any account with given email.", error, 500);
                });
            } else {
                // Already have an account with given email
                ack = new ResultPackage(results, "User already have an account.", error, 200);
            }
        }
        res.json(ack);
    })
})

UserAuthRouter.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const uid = uuidv4();

    let Hashing = new HashPassword();
    let hashedPassword = await Hashing.createHash(password, 10);
    let ack = {};

    conn.query("INSERT INTO users VALUES(?, ?, ?, ?, ?)", [uid, firstName, lastName, email, hashedPassword], (error, results) => {
        if (error) {
            ack = new ResultPackage(results, "Something went wrong", error, 500);
        } else {
            const token = jwt.sign({ id: uid, name: firstName + " " + lastName, email: email, isWriter: false }, process.env.TOKEN_KEY, { expiresIn: "1d" });

            res.cookie("SS_TOKEN", token);

            ack = new ResultPackage(results, "Your account has been successfully registered", error, 200);
        }

        res.json(ack);
    })
})

UserAuthRouter.post("/login", async (req, res) => {
    const token = req.cookies.SS_TOKEN;
    if (!token || token == "") {
        const { email, password } = req.body;
        let ack = {};

        conn.query("SELECT * FROM users WHERE email = ?", [email], async (error, results) => {
            if (error) {
                ack = new ResultPackage(results, "Something went wrong", error, 500);
            } else {
                if (results.length == 0) {
                    ack = new ResultPackage(results, "Invalid username or password. Please try again.", error, 401);
                } else {
                    let Hashing = new HashPassword();
                    let isValid = await Hashing.compareHash(password, results[0].password);

                    if (isValid) {
                        const token = jwt.sign({ id: results[0].userId, name: results[0].firstName + " " + results[0].lastName, email: results[0].email, isWriter: results[0].isWriter }, process.env.TOKEN_KEY, { expiresIn: "1d" });

                        res.cookie("SS_TOKEN", token);

                        delete results[0].password;
                        ack = new ResultPackage(results[0], "Login successful!", error, 200);
                    } else {
                        ack = new ResultPackage(null, "Invalid username or password. Please try again.", error, 401);
                    }
                }
            }

            res.json(ack);
        })
    } else {
        res.json(new ResultPackage(token, "A valid token is already present. Please use the current session.", null, 400));
    }
})

UserAuthRouter.post("/reset-password", async (req, res) => {
    const token = req.cookies.SS_TOKEN;
    let ack = {};

    if (!token || token == "") {
        const { email } = req.body;
        conn.query("SELECT * FROM users WHERE email=?", [email], async (error, results) => {
            if (error) {
                ack = new ResultPackage(results, "Something went wrong", error, 500);
            } else {
                if (results.length == 0) {
                    ack = new ResultPackage(results, "You don't have an account with this email.", error, 200);
                } else {
                    await sendPasswordResetLink(email).then((result)=>{
                        ack = result;
                    }).catch((error)=>{
                        ack = error;
                    })
                }
            }

            res.json(ack);
        })
    } else {
        const decode = jwt.verify(token, process.env.TOKEN_KEY);
        await sendPasswordResetLink(decode.email).then((result)=>{
            ack = result;
        }).catch((error)=>{
            ack = error;
        })

        res.json(ack);
    }
})

function sendPasswordResetLink(email){
    const token = jwt.sign({ email: email }, process.env.TOKEN_KEY, { expiresIn: 300 }); // 300 seconds 
    let resetPasswordLink = process.env.DEV_URL + "auth/reset-password/?token=" + token;
    return new Promise((resolve, reject)=>{
        const subject = "Reset your account password.";
        const message = `<!DOCTYPE html>
                                <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Email</title>
                                </head>
                                <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
                                    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                                        <div style="background-color: #3d8bde; color: #ffffff; padding: 10px 20px; text-align: center;">
                                            <h1 style="margin: 0; font-size: 24px;">StoryScribe</h1>
                                        </div>
                                        <div style="padding: 20px; font-size: 16px; color: #333333; line-height: 1.6;">
                                            <p style="margin: 0 0 20px;">Dear ${email},</p>
                                            <p style="margin: 0 0 20px;">Use the following link to reset your account password,</p>
                                            <p style="margin: 0 0 20px;">
                                                <a href="${resetPasswordLink}" style="display: inline-block; padding: 10px 20px; background-color: #3d8bde; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">Click here to Register</a>
                                            </p>
                                            <p style="margin: 0 0 20px;">Or copy this url into your browser:</p>
                                            <a href="${resetPasswordLink}" style="margin: 0 0 20px;">${resetPasswordLink}</a>
                                            <p><strong>Note:</strong> The link is valid for only 5 minutes. After that, it will expire.</p>
                                            <p style="margin: 0;">If you did not request this, please ignore this email.</p>
                                        </div>
                                        <div style="padding: 20px; text-align: center; font-size: 12px; color: #777777;">
                                            <p style="margin: 0;">StoryScribe</p>
                                        </div>
                                    </div>
                                </body>
                                </html>;`;

        HandlerMail.sendMail(process.env.EMAIL_NAME, email, subject, message).then((response) => {
            resolve(new ResultPackage(response, "Successfully sent password reset link to email.", null, 200));
        }).catch((error) => {
            // console.log(error);
            reject(new ResultPackage(null, "Something went wrong while sending password reset link.", error, 500));
        });
    })
}

module.exports = UserAuthRouter;