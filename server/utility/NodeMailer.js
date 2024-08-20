const NodeMailer = require("nodemailer");
const ResultPackage = require("./ResultPackage");

class MailHandler{
    constructor(){
        this.transporter = NodeMailer.createTransport({
            pool: true,
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_NAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        })
    }


    sendMail(from, to, subject, message){
        return new Promise((resolve, reject)=>{
            this.transporter.verify((error, success)=>{
                if(error){
                    reject(new ResultPackage(success, "Failed Email Transporter.", error, 500)); 
                }else{
                    // Transporter is ready to send the mail
                    this.transporter.sendMail({
                        from: from,
                        to: to,
                        subject: subject,
                        html: message
                    }, (error, success)=>{
                        if(error){
                            reject(new ResultPackage(null, "Failed to send email: An error occurred during the transfer process.", error, 500)); 
                        }else{
                            resolve(new ResultPackage(null, "Email sent successfully.", error, success.response)); 
                        }
                    })
                }
            })
        })
    }
}


const HandlerMail = new MailHandler();
module.exports = HandlerMail;