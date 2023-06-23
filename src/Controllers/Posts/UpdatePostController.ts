import { Request, Response } from "express";
import { UpdatePostService } from "../../Services/Posts/UpdatePostService";

class UpdatePostController {
    async handle(req: Request, res: Response) {
        const { id } = req.query as { id: string };
        const { category, brand, model, year, price } = req.body;

        const updatePostService = new UpdatePostService();

        const post = await updatePostService.execute({ id, category, brand, model, year, price });

        return res.json(post);
    }
}

export { UpdatePostController };