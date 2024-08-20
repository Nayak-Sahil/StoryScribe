// To use system environment variable
require("dotenv").config();

const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// ! Utility Middleware
server.use(bodyParser.json());
server.use(cookieParser());

// User Authentication Router
const userAuthRouter = require("./routers/UserAuth");
server.use("/auth", userAuthRouter);

server.get("/", (req, res)=>{
    console.log("Running");
    res.send("Running");
})

const PORT = process.env.PORT || 3020;
server.listen(PORT, (err)=>{
    if(err) throw err;

    console.log(`LISTENING ON PORT ${PORT}`);
})