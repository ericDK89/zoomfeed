import { PostRepository } from "../../repositories/prisma/posts-repository";
import { ListPostsService } from "../../services/list-posts-service";
import { ListPostsControllers } from "./list-posts-controller";

const postRepository = new PostRepository()
const listPortsService = new ListPostsService(postRepository)
export const listPostsController = new ListPostsControllers(listPortsService)