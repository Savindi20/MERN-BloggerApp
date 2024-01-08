import { Schema, model, Document } from "mongoose";

export interface IPostCategories extends Document {
  categoryName: string;
}

const PostCategoriesSchema = new Schema<IPostCategories>(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const PostCategories = model<IPostCategories>(
  "PostCategories",
  PostCategoriesSchema
);
