import { Request, Response } from "express";
import { GetPostByIdService } from "../../Services/Posts/GetPostByIdService";

class GetPostByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.query as { id: string };

        const getPostByIdService = new GetPostByIdService();

        const post = await getPostByIdService.execute({ id });

        return res.json(post);
    }
}

export { GetPostByIdController };