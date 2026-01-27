import { Router } from "express";
import { AuthController } from "./controller";

export const authRouter: Router = Router();
authRouter.post("/auth/login", AuthController.login);
