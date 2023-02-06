import { Router } from "express";
import { createCommentController } from "../controllers/createComment/create-comment-factory";
import { listCommentsController } from "../controllers/listComments/list-comments-factory";

export const commentsRoutes = Router()

commentsRoutes.post("/", (req, res) => {
  return createCommentController.handle(req, res)
})

commentsRoutes.get("/", (req, res) => {
  return listCommentsController.handle(req, res)
})