import { Router } from "express";
import { listPostsController } from "../controllers/listPosts/list-posts-factory";

export const postRoutes = Router()

postRoutes.get("/", async (req, res) => {
  return listPostsController.handle(req, res)
})