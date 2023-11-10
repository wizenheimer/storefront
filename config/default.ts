import dotenv from "dotenv"

dotenv.config();

export default {
    port: 1337,
    dbUri: process.env.DEFAULT_DB_URI,
    saltWorkFactor: 10,
};