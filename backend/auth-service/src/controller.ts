import { Request, Response } from "express";
import { IUser, User } from "./model/User";
import jwt from "jsonwebtoken";
import { ENVS } from "./utils/loadEnv";

export class AuthController {
  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({
          message: "Is required all params",
        });
        return;
      }
      const user = await User.findOne({
        where: {
          email,
          password,
        },
      });

      if (!user) {
        res.status(404).json({
          message: "User not found",
          data: [],
        });
      }
      //user exists
      const tokenGenerated = AuthController.generateToken({
        email,
        password,
      });
      res.status(200).json({
        message: "User found correctly",
        data: {
          email,
        },
        token: tokenGenerated,
      });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        message: `ERROR: ${error}`,
      });
    }
  }

  public static generateToken(user: IUser): string {
    return jwt.sign(user, ENVS.jwt_secret, { expiresIn: "1h" });
  }
}
