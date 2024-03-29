import express, { Router } from "express";
import CommentController from "../controllers/CommentController";

export default class CommentRoutes { // CommentRoutes is the class of the comment routes
  private router: Router = express.Router(); // Router is a class in express
  private commentController: CommentController = new CommentController(); // commentController is the instance of the CommentController class

  constructor() { // constructor() is used to initialize the class
    this.configRoutes();
  }

  private configRoutes = (): void => { // configRoutes() is used to configure the routes
    // POST /api/v1/comment
    this.router.post("/", this.commentController.createComment);
    // GET /api/v1/comment
    this.router.get("/", this.commentController.retrieveAllComments);
    // PUT /api/v1/comment/:id
    this.router.put("/:id", this.commentController.updateComment);
    // DELETE /api/v1/comment/:id
    this.router.delete("/:id", this.commentController.deleteComment);
  };

  public getRouter = (): Router => { 
    return this.router; 
  };
}