import { useEffect, useState } from "react"
import styles from "./App.module.scss"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import { api } from "./lib/axios/api"

interface Content {
  id: string
  text: string
  created_at: string
}

interface Author {
  id: string
  avatar_url: string 
  name: string
  role: string
  created_at: string
}

export interface IPosts {
  id: string,
  created_at: string,
  author: Author
  content: Content
}

export const App = () => {
  const [posts, setPosts] = useState<IPosts[]>([])

  useEffect(() => {
    api.get("/posts").then(res => {
        console.log(res.data.allPosts)
        setPosts(res.data.allPosts)
      })

    console.log(posts)
  }, [])
   
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                created_at={post.created_at}
                id={post.id}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
