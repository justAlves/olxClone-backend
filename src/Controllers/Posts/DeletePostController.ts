import { Request, Response } from "express";
import { DeletePostService } from "../../Services/Posts/DeletePostService";

class DeletePostController {
    async handle(req: Request, res: Response) {
        const { id } = req.query as { id: string };

        const deletePostService = new DeletePostService();

        const post = await deletePostService.execute({ id });

        return res.json(post);
    }
}

export { DeletePostController };