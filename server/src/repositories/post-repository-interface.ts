interface Content {
  id: string
  text: string
  created_at: Date
}

interface Author {
  id: string
  avatar_url: string 
  name: string
  role: string
  created_at: Date
}

export interface IPost {
  id: string,
  created_at: Date,
  author: Author
  content: Content
}

export interface PostRepositoryInterface {
  listAllPosts(): Promise<IPost[]>
}