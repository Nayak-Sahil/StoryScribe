const mysql = require("mysql");

const connPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
}) 

connPool.on("acquire", (connection)=>{
    // when a connection is acquired from the pool
    console.log(`connection get acquired at ${connection.threadId}`);
})

connPool.on("connection", (connection)=>{
    // when a new connection is made within the connections-pool, then this will trigger.
    console.log("Database get connected successfully.");
})

module.exports = connPool;