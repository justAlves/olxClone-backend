import { Request, Response } from "express";
import { GetAllPostService } from "../../Services/Posts/GetAllPostService";

type IGettAllPost = {
    category?: string;
    brand?: string;
    model?: string;
    year?: number;
}

class GetAllPostController {
    async handle( req: Request, res: Response ){
        const { category, brand, model, year, } = req.query as IGettAllPost;

        const getAllPostService = new GetAllPostService();

        const posts = await getAllPostService.execute({ category, brand, model, year, });

        return res.json(posts);
    }
}

export { GetAllPostController };