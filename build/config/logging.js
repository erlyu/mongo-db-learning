"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//depending on the request info, program will return accordingly
const info = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    }
    else {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};
//depending on the request info, program will return accordingly
const warn = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    }
    else {
        console.info(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};
const error = (namespace, message, object) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    }
    else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};
//depending on the request info, program will return accordingly
const debug = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    }
    else {
        console.info(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};
const getTimeStamp = () => {
    //gets date and returns it in a readable string!
    return new Date().toISOString();
};
exports.default = {
    info,
    warn,
    error,
    debug
};
