import prisma from "../../prisma";

interface IDeletePost {
    id: string;
}

class DeletePostService {
    async execute({ id }: IDeletePost) {
        const post = await prisma.post.delete({
            where: {
                id,
            }
        });

        return post;
    }
}

export { DeletePostService };