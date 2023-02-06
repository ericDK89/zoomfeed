import { PencilLine } from "phosphor-react"
import { Avatar } from "../Avatar"
import styles from "./Sidebar.module.scss"

export const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <img src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar image="https://github.com/ericDK89.png" />

        <strong>Eric Macedo</strong>
        <span>Dev Full Stack</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}