import { Router } from "express";
import { PostController } from "./controller";

export const postRouter: Router = Router();
postRouter.get("/posts", PostController.getAll);
postRouter.post("/posts", PostController.createPost);
