import { Schema, model, Document } from "mongoose";

export interface IComment extends Document {
  // IComment is the interface of the comment
  comment: string;
}

const CommentSchema = new Schema( // CommentSchema is the schema of the comment
  {
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = model<IComment>("Comment", CommentSchema); // exporting the comment model