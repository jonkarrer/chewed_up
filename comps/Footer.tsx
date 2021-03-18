import styles from "../styles/Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.Footer}>
      <ul className={styles.links}>
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
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <a>Admin</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
