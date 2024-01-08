import express, { Router } from "express";
import ImageController from "../controllers/ImageController";

export default class ImageRoutes { // ImageRoutes is the class of the image routes
  private router: Router = express.Router(); // Router is a class in express
  private imageController: ImageController = new ImageController(); // imageController is the instance of the ImageController class

  constructor() { // constructor() is used to initialize the class
    this.configRoutes();
  }

  private configRoutes = (): void => { // configRoutes() is used to configure the routes
    // GET /api/v1/image
    this.router.get("/", this.imageController.retrieveAllImages);
  };

  public getRouter = (): Router => { 
    return this.router; 
  };
}