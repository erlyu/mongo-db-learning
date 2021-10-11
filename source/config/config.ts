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

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'erlyu';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'KX84435zi3792153';
const MONGO_HOST = process.env.MONGO_URL || `mongodb+srv://erlyu:<KX84435zi3792153>@cluster0.insdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
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
