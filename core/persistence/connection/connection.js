const config = require("../../../config");
const mongoose = require("mongoose");
const logger = require("../../../utils/logger");

mongoose.connect('mongodb+srv://root:sesamo@cluster0-cixpp.mongodb.net/test?retryWrites=true&w=majority', {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10
});

mongoose.connection.on("error", (err)=>{
    logger.error(`Mongoose error: ${err}`);
});

mongoose.connection.on("disconnected", ()=>{
    logger.info(`Mongoose disconnected`);
});