import prisma from "../../prisma";

interface IGettAllPost {
    category?: string;
    brand?: string;
    model?: string;
    year?: number;
}

class GetAllPostService {
    async execute({ category, brand, model, year,}: IGettAllPost) {
        const posts = await prisma.post.findMany({
            where: {
                category,
                brand,
                model,
                year,
            }
        });

        return posts;
    }
}

export { GetAllPostService };