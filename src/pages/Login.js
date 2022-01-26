// import { button } from "react-bootstrap";
import { useContext } from "react";
import ProjectContext from "../utils/ProjectContext";
import styles from "./Login.module.css"

function Login() {
  const {loginuser,loginCompany}=useContext(ProjectContext)
  return ( 
 
 <div className={styles.bodyLogin}>
 
    <div className={styles.loginBox}>
        <div className={styles.left}>
          <h1>Login User</h1>
          <form  onSubmit={loginuser}>
          
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          

          <button className={styles.button} type="submit">LOGIN</button>
          </form>
        </div>

        <div className={styles.right}>
          <h1>Login  Copmany</h1>
          <form  onSubmit={loginCompany}>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          

          <button className={styles.button} type="submit">LOGIN </button>
          </form>
        </div>
        <div className={styles.or}>OR</div>
      </div>
   </div>
   );
}

export default Login;