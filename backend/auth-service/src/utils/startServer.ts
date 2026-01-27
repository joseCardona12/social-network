import type { Express } from "express";
import { sequelize } from "../config/db";
import { ENVS } from "./loadEnv";

export async function startServer(app: Express) {
  try {
    await sequelize.authenticate(); //<--- Trying to authentitcate with db
    console.log({ message: "db connected" });
    await sequelize.sync({
      alter: true,
    }); //<--- Synchronize models
    console.log({ messag: "Models synchronized" });

    app.listen(ENVS.service_port, () =>
      console.log("Auth service running on the port", ENVS.service_port),
    );
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}
