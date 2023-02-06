import { prisma } from "../../lib/prisma";
import { IPost, PostRepositoryInterface } from "../post-repository-interface";

export class PostRepository implements PostRepositoryInterface {

  async listAllPosts(): Promise<IPost[]> {
    const allPosts = await prisma.post.findMany({
      include: {
        author: true,
        content: true
      }
    })

    return allPosts
  }
}