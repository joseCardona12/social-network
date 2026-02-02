export interface IEnv {
  db_port: number;
  db_host: string;
  db_name: string;
  db_user: string;
  db_password: string;
  service_port: number;
}
export const ENVS: IEnv = {
  db_port: Number(process.env.POSTS_DB_PORT ?? 0),
  db_host: process.env.POSTS_DB_HOST ?? "",
  db_name: process.env.POSTS_DB_NAME ?? "",
  db_user: process.env.POSTS_DB_USER ?? "",
  db_password: process.env.POSTS_DB_PASSWORD ?? "",
  service_port: process.env.POSTS_SERVICE_PORT
    ? parseInt(process.env.POSTS_SERVICE_PORT)
    : 4002,
};
