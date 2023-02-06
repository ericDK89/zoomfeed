import { prisma } from "../../lib/prisma";
import { CommentRepositoryInterface } from "../comment-repository-interface";

export class CommentRepository implements CommentRepositoryInterface {

  async create(text: string): Promise<void> {
    await prisma.comment.create({
      data: {
        text,
        comment_author: {
          create: {
            name: "Zézinho"
          }
        }
      }
    })
  }

  async list(): Promise<any> {
    const allComment = await prisma.comment.findMany({
      include: {
        comment_author: true
      }
    })

    return allComment
  }
}