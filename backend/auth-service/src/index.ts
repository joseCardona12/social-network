import express, { type Express } from "express";
import { authRouter } from "./router";
import { startServer } from "./utils/startServer";

const app: Express = express();
app.use(express.json()); //Available data transfer using json format
app.use("/", authRouter); // Router middleware
startServer(app);
