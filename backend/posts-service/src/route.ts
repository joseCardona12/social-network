import { Router } from "express";
import { PostController } from "./controller";

export const postRouter: Router = Router();
postRouter.get("/posts", PostController.getAll);
postRouter.put("/posts/:id", PostController.updatePost);
postRouter.post("/posts", PostController.createPost);
