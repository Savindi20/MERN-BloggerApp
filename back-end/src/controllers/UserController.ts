import { Request, RequestHandler, Response } from "express";
import { User } from "../models/User";

export default class UserController {
  // UserController is the controller of the user
  registerUser: RequestHandler = async (
    // registerUser is the function to register a user
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //create operation
    try {
      const { name, email, password } = req.body; // destructuring assignment

      let user = await User.findOne({
        name: name,
        email: email,
        password: password,
      }); // check if user with the same email already exists
      if (!user) {
        // save user only the email is not existing
        user = new User({ name, email, password }); // create a new user
        user = await user.save(); // save() is used to save the document

        return res
          .status(200)
          .json({ message: "New user added.!", responseData: user });
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

  retrieveAllUsers: RequestHandler = async (
    // retrieveAllUsers is the function to retrieve all the users
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //read operation
    try {
      let users = await User.find(); // find() is used to find the documents

      return res.status(200).json({ responseData: users });
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
