import { Router } from "express";
import { commentsRoutes } from "./comments-routes";
import { postRoutes } from "./post-routes";

export const routes = Router()

routes.use("/comments", commentsRoutes)
routes.use("/posts", postRoutes)