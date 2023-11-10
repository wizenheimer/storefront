import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

// connect to mongodb
async function connect() {
    const dbUri = config.get<string>("dbUri");
    try {
        await mongoose.connect(dbUri);
        logger.info("connected to db.");
    } catch (err) {
        logger.error("couldn't connect to db.");
        process.exit(1);
    }
}

export default connect;