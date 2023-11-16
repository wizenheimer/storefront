import express from "express"
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import deserialiseUser from "./middleware/deserialiseUser";

// fetch server config
const port = config.get<number>("port")
const app = express()

app.use(express.json());
app.use(deserialiseUser);

app.listen(port, async () => {
    logger.info(`server started at: http://localhost:${port}`);
    // connect to db
    await connect();
    // register routes with current app
    routes(app);
});