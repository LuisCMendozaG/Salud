const fs = require("fs");
const log = require("log");
const fileLog = new Log("info", fs.createWriteStream("info.log"), { flags: "a" });

exports.info = function (message) {
    console.log(message);
    fileLog.info(message);
}

exports.error = function (message) {
    console.log(message);
    fileLog.error(message);
}