import styles from "./Video.module.css"
import Video from "../Video/HOME.MP4"

function Video1() {
  return (
    <>
        <video className={styles.video} src={Video} autoPlay muted loop></video>
      
    </>
  )
}
export default Video1
