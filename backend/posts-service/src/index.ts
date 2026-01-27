import express, { type Express } from "express";
import cors from "cors";
import { postRouter } from "./route";
import { startServer } from "./util/startServer";

const app: Express = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json()); //Available data transfer using json format
app.use("/", postRouter); // Router middleware
startServer(app);
