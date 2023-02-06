import { ChangeEvent, FormEvent } from "react"
import { IComment } from "../Post"
import styles from "./Form.module.scss"

interface ICommentText {
  text: string
}

interface FormProps {
  addNewComment: () => void
  createNewComment: (comment: ICommentText) => void
  newComment: IComment
}

export const Form = ({ addNewComment, createNewComment, newComment }: FormProps) => {

  const handleAddNewComment = async (e: FormEvent) => {
    e.preventDefault()
    addNewComment()
  }

  const handleCreateNewComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("")
    const newComment = {
      text: e.target.value
    }
    createNewComment(newComment) 
  }

  const newCommentInvalid = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("Esse campo é obrigatório.")
  }

  const newCommentValidator = newComment.text.trim().length === 0

  return (
    <form onSubmit={handleAddNewComment} className={styles.formContainer}>
      <strong>Deixe seu feedback</strong>

      <textarea 
        name="comment"
        placeholder="Deixe um comentário"
        onChange={handleCreateNewComment}
        value={newComment.text}
        onInvalid={newCommentInvalid}
        required
      />

      <footer>
        <button 
          type="submit" 
          disabled={newCommentValidator}
        >
          Publicar
        </button>
      </footer>
    </form>
  )
}