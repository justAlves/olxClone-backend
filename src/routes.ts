import { Router } from "express";
import { CreateUserController } from "./Controllers/User/CreateUserController";
import { AuthUserController } from "./Controllers/User/AuthUserController";
import { isAuthenticated } from "./Middlewares/isAuthenticated";
import { GetUserController } from "./Controllers/User/GetUserController";
import { CreatePostController } from "./Controllers/Posts/CreatePostController";
import { GetAllPostController } from "./Controllers/Posts/GetAllPostController";
import { GetPostByIdController } from "./Controllers/Posts/GetPostByIdController";

const router = Router();

//User routes
router.post("/register", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);
router.get("/me", isAuthenticated, new GetUserController().handle);

//Post routes
router.post("/post", isAuthenticated, new CreatePostController().handle);
router.get("/post/all", isAuthenticated, new GetAllPostController().handle);
router.get("/post", isAuthenticated, new GetPostByIdController().handle);

export { router };