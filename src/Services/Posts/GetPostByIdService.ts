import prisma from "../../prisma";

interface IGetPostById {
    id: string;
}

class GetPostByIdService {
    async execute({ id }: IGetPostById) {
        const post = await prisma.post.findUnique({
            where: {
                id,
            }
        });

        return post;
    }
}

export { GetPostByIdService };