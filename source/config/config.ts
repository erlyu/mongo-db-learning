import dotenv from 'dotenv';

dotenv.config();

// common mongoose options
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false
};

const MONGO = {
    options: MONGO_OPTIONS,
    url: `mongodb+srv://john:CAR@cluster0.insdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// define properties for the server
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

// configure its properites
const config = {
    mongo: MONGO,
    server: SERVER
};
export default config;
