import { Request, RequestHandler, Response } from "express";
import { User } from "../models/User";

export default class UserController {

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
