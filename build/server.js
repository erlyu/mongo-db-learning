"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
// import bodyParser from 'body-parser';
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const sample_1 = __importDefault(require("./routes/sample"));
// where log is coming from
const NAMESPACE = 'Server';
// define API behavior
const router = (0, express_1.default)();
// log the request from client (think cse130 with the HTTP proxy)
// Params: req - request object, res - resposne object, next - next function
// middleware - means of utulizing info given to modify or return
router.use((req, res, next) => {
    /** Log the req */
    logging_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /** Log the res */
        logging_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });
    next();
});
// parse body of the request!
// this is not needed for now, but will be used for projects outside this intro
// purpose of these two injections is to: allows us to send next to json and not need to call json.parse
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
// define rules of api, aka what is allowed
router.use((req, res, next) => {
    // allows request from anywhere via *, but IPS and Routes should be predefined in future projects
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    // next processes the request such that the information can be used.
    next();
});
// define routes
router.use('/sample', sample_1.default);
// define errors, where input has gotten past all routes
// run with: nodemon source/server.ts
router.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
// create server
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server is running ${config_1.default.server.hostname}:${config_1.default.server.port}`));
