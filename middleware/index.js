const fs = require('fs')

//middleware

const logger = (req, res, next) => {
    const logMessage = `\n ${Date.now()} IP : ${req.ip} method: ${req.method} path:${req.path}`

    fs.appendFile("./logger.txt", logMessage, (err) => {
        if (err) {
            console.error("Error writing to logger.txt:", err);
        } 
        next();
    });
};

module.exports={logger}