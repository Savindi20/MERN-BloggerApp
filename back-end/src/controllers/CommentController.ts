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

  retrieveAllComments: RequestHandler = async (
    // retrieveAllComments is the function to retrieve all the comments
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    try {
      let getComments = await Comment.find(); // find() is used to find the documents
      return res.status(200).json({ responseData: getComments }); // return the response
    } catch (error: unknown) {
      // catch block is used to handle the errors
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  updateComment: RequestHandler = async (
    // updateComment is the function to update a comment
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    try {
      // destructuring assignment
      const { id } = req.params; // id is the id of the comment

      let updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
        // findByIdAndUpdate() is used to find the document by id and update
        new: true,
      });
      return res // return the response
        .status(200)
        .json({ message: "Comment updated.", responseData: updatedComment });
    } catch (error: unknown) {
      if (error instanceof Error) {
        // catch block is used to handle the errors
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };


}