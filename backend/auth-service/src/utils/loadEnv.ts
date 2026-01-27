export interface IEnv {
  db_port: number;
  db_host: string;
  db_name: string;
  db_user: string;
  db_password: string;
  service_port: number;
  jwt_secret: string;
}
export const ENVS: IEnv = {
  db_port: Number(process.env.DB_PORT ?? 0),
  db_host: process.env.DB_HOST ?? "",
  db_name: process.env.AUTH_DB_NAME ?? "",
  db_user: process.env.AUTH_DB_USER ?? "",
  db_password: process.env.AUTH_DB_PASSWORD ?? "",
  service_port: process.env.PORT ? parseInt(process.env.PORT) : 4001,
  jwt_secret: process.env.JWT_SECRET ?? "",
};
