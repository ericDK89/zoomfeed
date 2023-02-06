interface ICommentAuthor {
  id: string
  name: string
  created_at: Date
}

export interface IComment {
  text: string
  comment_author: ICommentAuthor
  id: string
  created_at: Date
}

export interface CommentRepositoryInterface {
  create(text: string): Promise<void>
  list(): Promise<IComment[]>
}