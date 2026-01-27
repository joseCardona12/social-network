import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export interface IPost {
  message: string;
  date: string;
  user_id: number;
}

export const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    timestamps: false,
  },
);
