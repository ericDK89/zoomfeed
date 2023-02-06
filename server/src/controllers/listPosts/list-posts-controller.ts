import { Request, Response } from "express";
import { ListPostsService } from "../../services/list-posts-service";

export class ListPostsControllers {
  constructor(private listPortsService: ListPostsService) {}

  async handle(req: Request, res: Response) {
    const allPosts = await this.listPortsService.execute()
    return res.status(200).json({allPosts})
  }
}