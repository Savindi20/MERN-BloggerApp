import express, { Router } from "express";
import PostController from "../controllers/PostController";
export default class PostRoutes {
  private router: Router = express.Router();
  private postController: PostController = new PostController();
  constructor() {
    this.configRoutes();
  }
  private configRoutes = (): void => {

    // POST /api/v1/post
    this.router.post("/", this.postController.createPost);
    // GET /api/v1/post
    this.router.get("/", this.postController.retrieveAllPosts);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}