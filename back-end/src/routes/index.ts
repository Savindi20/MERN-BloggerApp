import { Router } from "express";
import UserRoutes from "./UserRoutes";
import ImageRoutes from "./ImageRoutes";

const router: Router = Router(); // Router is a class in express
const url_prefix = "/api/v1"; // url_prefix is the prefix of the url

router.use(`${url_prefix}/user`, new UserRoutes().getRouter());
router.use(`${url_prefix}/image`, new ImageRoutes().getRouter());

export default router;