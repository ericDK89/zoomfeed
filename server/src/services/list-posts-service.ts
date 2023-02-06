import { PostRepository } from "../repositories/prisma/posts-repository";

export class ListPostsService {
  constructor(private postRepository: PostRepository) {}

  execute() {
    return this.postRepository.listAllPosts()
  }
}