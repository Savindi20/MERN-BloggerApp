import { Schema, model, Document } from "mongoose";

export interface IImage extends Document{
  // IImage is the interface of the image
  imageUrl: string;
}

const ImageSchema = new Schema(
  {
    // ImageSchema is the schema of the image
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Image = model<IImage>("Image", ImageSchema);