import { Request, Response } from "express";
import { ListCommentsService } from "../../services/list-comments-service";

export class ListCommentsController {
  constructor(private listCommentsService: ListCommentsService) {}

  async handle(req: Request, res: Response) {
    const allComments = await this.listCommentsService.execute()
    return res.status(200).json(allComments)
  }
}