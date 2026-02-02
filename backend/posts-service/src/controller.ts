import { Request, Response } from "express";
import { Post } from "./model/Post";
import { where } from "sequelize";
export class PostController {
  public static async getAll(_: Request, res: Response): Promise<void> {
    try {
      const posts = await Post.findAll();
      res.status(200).json({
        message: "GET posts correctly",
        data: posts,
      });
    } catch (error) {
      res.status(500).json({
        message: `ERROR: ${error}`,
      });
    }
  }
  public static async createPost(req: Request, res: Response): Promise<void> {
    try {
      const { message, date, user_id } = req.body;
      const postCreated = await Post.create({
        message,
        date,
        user_id,
      });
      if (!postCreated) {
        res.status(400).json({
          message: "Error to create post",
          data: [],
        });
        return;
      }
      res.status(202).json({
        message: "POST created correctly",
        data: postCreated,
      });
    } catch (error) {
      res.status(500).json({
        message: `ERROR: ${error}`,
      });
    }
  }

  public static async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const params = req.params;
      const { message, date, user_id } = req.body;
      console.log("message", message);

      const updatePost = Post.update(
        {
          message,
          date,
          user_id,
        },
        {
          where: {
            id: params.id ?? "",
          },
        },
      );

      if (!updatePost) {
        res.status(400).json({
          message: "Error to update post",
          data: [],
        });
        return;
      }
      res.status(200).json({
        message: "Post updated correctly",
        data: updatePost,
      });
    } catch (error) {
      res.status(500).json({
        message: `ERROR: ${error}`,
      });
    }
  }
}
