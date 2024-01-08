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

  updateUser: RequestHandler = async (
    // updateUser is the function to update a user
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //update operation
    try {
      const { id } = req.params; // id is the id of the user

      let updatedUser = await User.findByIdAndUpdate(id, req.body, {
        //find the user by ID and update
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        message: "User updated successfully.!",
        responseData: updatedUser,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  deleteUser: RequestHandler = async (
    // deleteUser is the function to delete a user
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //delete operation
    try {
      const { id } = req.params; // id is the id of the user

      let deletedUser = await User.findByIdAndDelete(id); // find the user by ID and delete

      if (!deletedUser) {
        // check whether the user exists or not
        return res.status(404).json({ message: "User not found" });
      }
      return res // return the response
        .status(200)
        .json({
          message: "User deleted successfully.!",
          responseData: deletedUser,
        });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  signIn: RequestHandler = async (
    // signIn is the function to sign in
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    try {
      const { email, password } = req.body; // destructuring assignment

      const user = await User.findOne({ email: email }); // find the user by email

      if (user) {
        // check whether the user exists or not
        if (user.password == password) {
          // check whether the password is correct or not
          return res.status(200).json({
            message: "Login Successfull..!",
            // responseData: { name: user.name, email },
            responseData: { id: user._id },

          });
        } else {
          return res.status(500).json({
            // return the response
            message: "Your Password is Wrong..!",
            responseData: password,
          });
        }
      } else {
        // return the response
        return res
          .status(500)
          .json({ message: "Your Email is Wrong..!", responseData: email });
      }
    } catch (error: unknown) {
      if (error instanceof Error)
        return res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };
  
}