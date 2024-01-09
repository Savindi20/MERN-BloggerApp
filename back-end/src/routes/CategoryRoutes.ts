import express, { Router } from "express";
import CategoryController from "../controllers/CategoryController";

export default class CategoryRoutes { // CategoryRoutes is the class of the category routes
  private router: Router = express.Router(); // Router is a class in express
  private categoryController: CategoryController = new CategoryController(); // categoryController is the instance of the CategoryController class

  constructor() { // constructor() is used to initialize the class
    this.configRoutes();
  }

  private configRoutes = (): void => { // configRoutes() is used to configure the routes
    // POST /api/v1/category
    this.router.post("/", this.categoryController.createCategory);
    // GET /api/v1/category
    this.router.get("/", this.categoryController.retrieveAllCategories);
    // PUT /api/v1/category/:id
    this.router.put("/:id", this.categoryController.updateCategory);
  };

  public getRouter = (): Router => { 
    return this.router; 
  };
}