import { CommentRepository } from "../../repositories/prisma/comment-repository";
import { ListCommentsService } from "../../services/list-comments-service";
import { ListCommentsController } from "./list-comments-controller";

const commentRepository = new CommentRepository()
const listCommentsService = new ListCommentsService(commentRepository)
export const listCommentsController = new ListCommentsController(listCommentsService)