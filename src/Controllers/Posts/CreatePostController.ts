import { Request, Response } from "express";
import { CreatePostService } from "../../Services/Posts/CreatePostService";

class CreatePostController {
    async handle(req: Request, res: Response) {
        const ownerId = req.user_id;
        const { description, price, category, brand, model, year } = req.body;

        const title = brand + " " + model + " " + year.toString();

        const createPostService = new CreatePostService();

        const posts = await createPostService.execute({title, description, price, category, brand, model, year, ownerId });

        return res.json(posts);
    }
}

export { CreatePostController };