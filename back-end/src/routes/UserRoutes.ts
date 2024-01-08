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
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
