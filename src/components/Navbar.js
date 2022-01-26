import { useContext } from "react"
import { Link } from "react-router-dom"
import ProjectContext from "../utils/ProjectContext"
import styles from "./Navbar.module.css"

function NavbarItem() {
  const { aboutRef, logout } = useContext(ProjectContext)
  return (
    <>
      <nav className={styles.stroke}>
        <ul>
          <li
            style={{
              position: "absolute",
              width: "80px",
              height: "100px",
              zindex: "-1",
              left: "40px ",
            }}
          >
            <div>
              <div className={styles.overlay}></div>
              <div className={styles.logoHolder}>
                <div className={styles.logo}>
                  <a href="#" alt="Mahi Web" title="Mahi Web">
                    <span className={styles.mainTitle}>CAUPC</span>
                    <span className={styles.subTitle}>Company And Users Projects Collection</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/"> home</Link>
          </li>
          <li>
            <Link onClick={() => aboutRef.current?.scrollIntoView()} to="/">
              About
            </Link>
          </li>

          {localStorage.tokenCompany || localStorage.tokenUser ? (
            <>
              <li>
                <Link to="/profile">profile</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  Log OUT
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default NavbarItem
