import { CommentRepository } from "../../repositories/prisma/comment-repository";
import { CreateCommentService } from "../../services/create-comment-service";
import { CreateCommentController } from "./create-comment-controller";

const commentRepository = new CommentRepository()
const createCommentService = new CreateCommentService(commentRepository)
export const createCommentController = new CreateCommentController(createCommentService)