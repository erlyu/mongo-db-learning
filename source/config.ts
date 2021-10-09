import dotenv from 'dotenv';

dotenv.config();
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// define properties for the server
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

// configure its properites
const config = {
    server: SERVER
};
export default config;
