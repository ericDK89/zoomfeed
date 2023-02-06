import { CommentRepository } from "../repositories/prisma/comment-repository";

export class CreateCommentService {
  constructor(private commentRepository: CommentRepository) {}

  execute(text: string) {
   return this.commentRepository.create(text)
  }
}