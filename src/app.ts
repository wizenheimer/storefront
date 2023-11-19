import express from "express"
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";

// fetch server config
const port = config.get<number>("port")
const app = createServer();

app.listen(port, async () => {
    logger.info(`server started at: http://localhost:${port}`);
    // connect to db
    await connect();

});