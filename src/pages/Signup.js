import { useContext } from "react"
import ProjectContext from "../utils/ProjectContext"
import styles from "./Signup.module.css"

function SignUp() {
  const { signupUser, signupCopmany } = useContext(ProjectContext)

  return (
    <div className={styles.bodySingup}>
      <div className={styles.signupBox}>
        <div className={styles.left}>
          <h1>Sign up User</h1>
          <form onSubmit={signupUser}>
            <input type="text" name="userName" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />

            <button className={styles.button} type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <h1>Sign up Copmany</h1>
          <form onSubmit={signupCopmany}>
            <input type="text" name="companyName" placeholder="CompanyName" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />

            <button className={styles.button} type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div className={styles.or}>OR</div>
      </div>
    </div>
  )
}

export default SignUp
