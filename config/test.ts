import dotenv from "dotenv"

dotenv.config();

export default {
    port: 1337,
    dbUri: process.env.DEFAULT_DB_URI,
    saltWorkFactor: 10,
    accessTokenTTL: '15m',
    refreshTokenTTL: '1y',
    publicKey: process.env.JWT_PUBLIC_KEY,
    privateKey: process.env.JWT_PRIVATE_KEY,
};