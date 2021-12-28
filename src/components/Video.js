import styles from "./Video.module.css"
import Video from "../Video/HOME.MP4"
import { Col, Container, Row } from "react-bootstrap"
function Video1() {
  return (
    <>
        <video className={styles.video} src={Video} autoPlay muted loop></video>
    </>
  )
}
export default Video1
