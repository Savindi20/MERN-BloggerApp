import { Request, RequestHandler, Response } from "express";
import { PostCategories } from "../models/PostCategories";


export default class CategoryController { // CategoryController is the controller of the category

  createCategory: RequestHandler = async ( // createCategory is the function to create a category
    req: Request,
    res: Response
  ): Promise<Response> => { // Promise<Response> is the return type of the function
    try {
      // destructuring assignment
      const { categoryName } = req.body;

      // check whether the relevant category already exists or not
      let category = await PostCategories.findOne({ categoryName: categoryName }); // findOne() is used to find the first document that matches the query
      if (!category) { // save category only the category  name is not existing
        category = new PostCategories({ categoryName: categoryName }); // create a new category
        category = await category.save(); // save() is used to save the document

        return res // return the response
          .status(200)
          .json({ message: "New category added.!", responseData: category }); 
      } else {
        return res.status(200).json({ message: "Already exists." });
      }
    } catch (error: unknown) { // catch block is used to handle the errors
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };teCategory = async (req: Request, res: Response): Promise<Response> => { // deleteCategory is the function to delete a category
    try {
      // destructuring assignment
      const { id } = req.params; // id is the id of the category

      let deletedCategory = await PostCategories.findByIdAndDelete(id); // findByIdAndDelete() is used to find the document by id and delete

      if (!deletedCategory) { // check whether the category is deleted or not
        throw new Error("Failed to delete post.");
      }

      return res // return the response
        .status(200)
        .json({ message: "Category deleted.", responseData: deletedCategory });
    } catch (error: unknown) { 
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}