import styles from "./Avatar.module.scss"

interface AvatarProps {
  image: string
  isComment?: boolean
}

export const Avatar = ({ image, isComment = false }: AvatarProps) => {
  return (
    <img 
      className={isComment ? styles.avatarComment : styles.avatar} 
      src={image} 
      alt="" 
    />
  )
}