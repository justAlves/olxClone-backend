import prisma from "../../prisma";

interface IUpdatePost {
    id: string;
    title?: string;
    description?: string;
    price?: number;
    category?: string;
    brand?: string;
    model?: string;
    year?: number;
}

class UpdatePostService {
    async execute({ id, title, description, price, category, brand, model, year,}: IUpdatePost) {
          
        const post = await prisma.post.update({
            where: {
                id,
            },
            data: {
                title,
                description,
                price,
                category,
                brand,
                model,
                year,
            }
        });
  
        return post;
    }
}

export { UpdatePostService };