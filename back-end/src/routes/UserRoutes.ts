import express, { Router } from "express";
import UserController from "../controllers/UserController";

export default class UserRoutes {
  private router: Router = express.Router(); // Router is a class in express
  private userController: UserController = new UserController(); // userController is the instance of the UserController class

  constructor() {
    // constructor() is used to initialize the class
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/user
    this.router.post("/", this.userController.registerUser); // registerUser is the function to register a user
    // GET /api/v1/user
    this.router.get("/", this.userController.retrieveAllUsers); // retrieveAllUsers is the function to retrieve all the users
    // PUT /api/v1/user/:id
    this.router.put("/:id", this.userController.updateUser); // updateUser is the function to update a user
    // DELETE /api/v1/user/:id
    this.router.delete("/:id", this.userController.deleteUser); // deleteUser is the function to delete a user
    // POST /api/v1/user/sign-in
    this.router.post("/sign-in", this.userController.signIn); // signIn is the function to sign in a user
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
