import http from 'http';
import express from 'express';
// import bodyParser from 'body-parser';
import logging from './logging';
import config from './config';

// where log is coming from
const NAMESPACE = 'Server';
// define API behavior
const router = express();

// log the request from client (think cse130 with the HTTP proxy)
// Params: req - request object, res - resposne object, next - next function
// middleware - means of utulizing info given to modify or return
router.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

// parse body of the request!
// this is not needed for now, but will be used for projects outside this intro
// purpose of these two injections is to: allows us to send next to json and not need to call json.parse
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use("/a", (req, res) => {
    console.log("hi");
    res.status(200).end();
})

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

// define errors, where input has gotten past all routes
// run with: nodemon source/server.ts
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

// create server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
