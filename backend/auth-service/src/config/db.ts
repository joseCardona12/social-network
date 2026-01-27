import { Sequelize } from "sequelize";
import { ENVS } from "../utils/loadEnv";

console.log("env", ENVS);
export const sequelize: Sequelize = new Sequelize(
  ENVS.db_name!,
  ENVS.db_user!,
  ENVS.db_password!,
  {
    host: ENVS.db_host,
    port: ENVS.db_port,
    dialect: "postgres",
    logging: false,
  },
);
