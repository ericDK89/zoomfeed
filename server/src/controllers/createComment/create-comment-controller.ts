import { Request, Response } from "express";
import { CreateCommentService } from "../../services/create-comment-service";

export class CreateCommentController {
  constructor(private createCommentService: CreateCommentService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { text } = req.body

    await this.createCommentService.execute(text)

    return res.status(201).end()
  }
}