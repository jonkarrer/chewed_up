import styles from "../styles/Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.Footer}>
      <nav className={styles.links}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
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
          <Link href="/login">
            <a>Admin</a>
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Footer;
