import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [linkContainer, setLinkContainer] = useState("40px");
  const [linkDisplay, setLinkDisplay] = useState("none");
  const [toggleDropdown, setDropdown] = useState(false);

  const handleClick = () => {
    if (toggleDropdown) {
      setLinkContainer("200px");
      setLinkDisplay("block");
      setDropdown(!toggleDropdown);
    } else {
      setLinkContainer("40px");
      setLinkDisplay("none");
      setDropdown(!toggleDropdown);
    }
  };
  return (
    <>
      <nav className={styles.Nav} style={{ height: linkContainer }}>
        <div className={styles.hamburger} onClick={handleClick}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul className={styles.links} style={{ display: linkDisplay }}>
          <li>
            <Link href="/admin">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a>Series</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
