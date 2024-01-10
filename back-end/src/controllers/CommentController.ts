import { Request, RequestHandler, Response } from "express";
import { Comment } from "../models/Comment";

export default class CommentController {

  // CommentController is the controller of the comment
  createComment: RequestHandler = async (
    // createComment is the function to create a comment
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    try {
      // destructuring assignment
      const { comment } = req.body;

      // check whether the relevant comment already exists or not
      let createComment = await Comment.findOne({ comment: comment }); // findOne() is used to find the first document that matches the query
      if (!createComment) {
        // save comment only the comment  name is not existing
        createComment = new Comment({ comment: comment }); // create a new comment
        createComment = await createComment.save(); // save() is used to save the document

        return res // return the response
          .status(200)
          .json({
            message: "New comment added.!",
            responseData: createComment,
          });
      } else {
        return res.status(200).json({ message: "Already exists." });
      }
    } catch (error: unknown) {
      // catch block is used to handle the errors
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

}