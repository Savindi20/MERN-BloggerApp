import { RequestHandler, Request, Response } from "express";
import mongoose, { ClientSession } from "mongoose";
import { PostCategories } from "../models/PostCategories";
import { Tag } from "../models/Tag";
import { Post } from "../models/Post";
import { Image } from "../models/Image";

export default class PostController {
  // PostController is the controller of the post
  createPost: RequestHandler = async (
    // createPost is the function to create a post
    req: Request, // req is the request
    res: Response // res is the response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //create operation
    let session: ClientSession | null = null;

    try {
      // try block is used to handle the errors
      const { categoryName } = req.body;
      const { imageUrl } = req.body;

      // start the session and transaction
      session = await mongoose.startSession();
      session.startTransaction(); // startTransaction() is used to start the transaction

      // check whether the relevant category already exists or not
      let category = await PostCategories.findOne({
        // findOne() is used to find the first document that matches the query
        categoryName: categoryName,
      }).session(session);

      if (!category) {
        // save category only if not exists
        category = new PostCategories({ categoryName: categoryName });
        category = await category.save();
      }

      const post = new Post(req.body);
      // set the category id here
      post.categoryId = category._id.toString();

      // save image
      let images = await Image.findOne({
        imageUrl: imageUrl,
      }).session(session);

      if (!images) {
        // save image only if not exists
        images = new Image({ imageUrl: imageUrl });
        images = await images.save();
      }

      // set the image id here
      post.imageId = images._id.toString();

      // save Post details
      let newPost = await post.save();

      // getting the tags array from request body
      const tags = req.body.tags;

      // save tags
      if (tags.length > 0) {
        for (let i = 0; i < tags.length; i++) {
          // check whether the relevant tag already exists or not
          let tag = await Tag.findOne({ text: tags[i] }).session(session);
          if (!tag) {
            tag = new Tag({ text: tags[i] });
            await tag.save();
          }
        }
      }

      await session.commitTransaction(); // commitTransaction() is used to commit the transaction
      session.endSession(); // endSession() is used to end the session

      return res
        .status(200)
        .json({ message: "New Post created.", responseData: newPost });
    } catch (error: unknown) {
      // catch block is used to handle the errors
      if (session != null) {
        try {
          await session.abortTransaction();
        } catch (abortError) {
          console.log(`Error aborting transaction: ${abortError}`);
        }
      }

      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  retrieveAllPosts: RequestHandler = async (
    // retrieveAllPosts is the function to retrieve all the posts
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //read operation
    try {
      const posts = await Post.find(); // find() is used to find the documents that matches the query
      return res.status(200).json({ responseData: posts });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

}

