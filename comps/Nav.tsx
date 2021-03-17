import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [navHeight, setNavHeight] = useState("40px");
  const [linkDisplay, setLinkDisplay] = useState("none");
  const [toggleNav, setNav] = useState(false);

  const handleClick = () => {
    if (toggleNav) {
      setNavHeight("200px");
      setLinkDisplay("block");
      setNav(!toggleNav);
    } else {
      setNavHeight("40px");
      setLinkDisplay("none");
      setNav(!toggleNav);
    }
  };
  return (
    <>
      <header className={styles.header}>
        <img className={styles.headerImage} src="/Up.jpg" alt="heading logo" />
      </header>
      <nav className={styles.Nav} style={{ height: navHeight }}>
        <div className={styles.hamburger} onClick={handleClick}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul className={styles.links} style={{ display: linkDisplay }}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/series">
              <a>Series</a>
            </Link>
          </li>
          <li>
            <Link href="/">
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
