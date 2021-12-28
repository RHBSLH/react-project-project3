import styles from "./Com.module.css"

function Com () {
    return ( 
        <>
      
<div className={styles.overlay}></div>
<div className={styles.logoHolder}>
  <div className={styles.logo}>
    <a href="#" alt="Mahi Web" title="Mahi Web">
      <span className={styles.mainTitle}>Larson</span>
      <span className={styles.subTitle}>Architecture Studio</span>
    </a>
  </div>
</div>
<div className={styles.contentHolder}>
  <h1>Coming Soon...</h1>
  <p>In convallis risus ipsum, id rhoncus quam ultricies in donec metus odio<br/> tempus ut erat ac Duis sagittis est non interdum porttitor.</p>
</div>
<div className={styles.coundownHolder}>
  <h2>Our website will be launched in:</h2>
  {/* <div id="timer">
    <div id="days"></div>
    <div id="hours"></div>
    <div id="minutes"></div>
    <div id="seconds"></div>
  </div> */}
</div>
<div className={styles.socialMedia}>
  <ul>
    <li><a href="#" target="_blank"><i class="fa fa-facebook" aria-hidden="true" data-tooltip="facebook"></i>
</a></li>
    <li><a href="#" target="_blank"><i class="fa fa-twitter" aria-hidden="true" data-tooltip="twitter"></i>
</a></li>
    <li><a href="#" target="_blank"><i class="fa fa-linkedin" aria-hidden="true" data-tooltip="linkedin"></i>
</a></li>
    <li><a href="#" target="_blank"><i class="fa fa-envelope" aria-hidden="true" data-tooltip="email us"></i>
</a></li>
  </ul>
</div>
</>
     );
}

export default Com ;