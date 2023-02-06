import { CommentRepository } from "../repositories/prisma/comment-repository";

export class ListCommentsService {
  constructor(private commentRepository: CommentRepository) {}

  execute() {
    return this.commentRepository.list()
  }
}