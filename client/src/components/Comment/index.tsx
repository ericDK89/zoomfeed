import { Trash } from "phosphor-react"
import { formatDate, formatDateDistance } from "../../lib/date-fns/date-format"
import { Avatar } from "../Avatar"
import styles from "./Comment.module.scss"

interface CommentProps {
  content: string,
  deleteComment: (comment: string) => void
  created_at: Date
}

export const Comment = 
  ({ content, deleteComment, created_at = new Date()}: CommentProps) => {

  const handleDeleteComment = () => {
    deleteComment(content)
  }

  return (
    <> 
      <div className={styles.commentContainer}>
        <Avatar image="https://picsum.photos/200" isComment />
          
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Zézinho</strong>

                <time title={formatDate(String(created_at))} dateTime={formatDate(String(created_at))}>
                  {formatDateDistance(String(created_at))}
                </time>
              </div>

              <button 
                title="Deletar" 
                type="button" 
                onClick={handleDeleteComment}
              >
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  )
}