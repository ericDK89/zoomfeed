import { useEffect, useState } from "react"
import { IPosts } from "../../App"
import { api } from "../../lib/axios/api"
import { formatDate, formatDateDistance } from "../../lib/date-fns/date-format"
import { Avatar } from "../Avatar"
import { Comment } from "../Comment"
import { Form } from "../Form"
import styles from "./Post.module.scss"

type PostProps = IPosts

export interface IComment {
  text: string
  id: string
  created_at: Date
}

export const Post = ({ author, content, created_at }: PostProps) => {
  const [comments, setComments] = useState<IComment[]>([])

  const [newComment, setNewComment] = useState<IComment>({
    id: "",
    text: "",
    created_at: new Date(),
  })

  useEffect(() => {
    api.get("/comments")
      .then(res => {
        setComments(res.data)
      })
  }, [])

  const handleAddNewComment = () => {
    setComments(previousState => [...previousState, newComment])
    
    api.post("/comments", newComment)

    setNewComment({
      id: "",
      text: "",
      created_at: new Date(),
    })
  }

  const handleCreateNewComment = (comment: IComment) => {
    setNewComment(comment)
  }

  const handleDeleteComment = (content: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.text !== content)
    setComments(commentsWithoutDeletedOne)
  }
  
  return (
    <article className={styles.postContainer}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar image={author.avatar_url} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formatDate(created_at)} dateTime={formatDate(created_at)}>
        {formatDateDistance(created_at)}
        </time>
      </header>

      <div className={styles.postContent}>
        <p>{content.text}</p>
      </div>

      <Form 
        addNewComment={handleAddNewComment} 
        createNewComment={handleCreateNewComment}
        newComment={newComment}
        />

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment.id} 
              content={comment.text}  
              deleteComment={handleDeleteComment}
              created_at={comment.created_at}
            />
          )
        })}
      </div>
    </article>
  )
}