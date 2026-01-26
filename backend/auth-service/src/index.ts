import express from "express";
import type { Express } from "express";

const app: Express = express();
app.use(express.json()); //Available data transfer using json format
app.use("/", () => console.log("OK"));

app.listen(3000, () => console.log("Auth service running on the port: ", 4000));
