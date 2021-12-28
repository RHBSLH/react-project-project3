import styles from "./Navbar.module.css"


function NavbarItem() {
    return ( 
<>
 
  <nav className={styles.stroke}>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Downloads</a></li>
      <li><a href="#">More</a></li>
      <li><a href="#">Nice staff</a></li>
      <li><a href="#">Nice staff</a></li>
    </ul>
  </nav>

</>


     );
}

export default NavbarItem;
