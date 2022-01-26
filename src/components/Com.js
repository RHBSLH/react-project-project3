import { useContext, useRef } from "react"
import ProjectContext from "../utils/ProjectContext"
import styles from "./Com.module.css"

function Com() {
  const { aboutRef } = useContext(ProjectContext)
  return (
    <div className={styles.all} ref={aboutRef}>
      <div className={styles.intro}>
        <div className={styles.child}>
          <h1>CAUPC</h1>
          <p>
            There is a problem in project owners presenting their projects, and there is also a difficulty in
            communicating with companies. The idea of ​​the project is a site that brings together projects, whether for
            users or companies, and it is easy to present projects of different types of fields, and it is also easy to
            submit offers to them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Com
