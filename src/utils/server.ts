import express from "express";
import routes from "../routes";
import deserialiseUser from "../middleware/deserialiseUser";

function createServer() {
    // create express instance
    const app = express()

    // add middlewares
    app.use(express.json());
    app.use(deserialiseUser);

    // register routes with current app
    routes(app);
    return app;
}

export default createServer;