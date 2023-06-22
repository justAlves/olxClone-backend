import prisma from "../../prisma";

interface ICreatePost {
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  model: string;
  year: number;
  ownerId: string;
}

class CreatePostService {
    async execute({ title, description, price, category, brand, model, year, ownerId,}: ICreatePost) {

        const post = await prisma.post.create({
            data: {
                title,
                description,
                price,
                category,
                brand,
                model,
                year,
                ownerId,
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                category: true,
                brand: true,
                model: true,
                year: true,
                ownerId: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return {post};
    }
}

export { CreatePostService };