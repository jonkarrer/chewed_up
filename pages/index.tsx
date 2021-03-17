import Head from "next/head";
import Link from "next/link";
import Post from "../comps/Post";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styles from "../styles/Home.module.css";

import prisma from "../lib/prisma";

export const getServerSideProps = async () => {
  const data = await prisma.post.findMany();

  return {
    props: { allPosts: data },
  };
};

export default function HomeRun({ allPosts }) {
  const [props, setHeight] = useSpring(() => ({ height: "100px" }));

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setHeight({ height: `${window.pageYOffset + 100}px` })
    );
    return window.removeEventListener("scroll", () =>
      setHeight({ height: `${window.pageYOffset + 100}px` })
    );
  }, []);

  return (
    <div className="container">
      <Head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-snowpack-app"
        />
        <title>Chewed Up</title>
      </Head>
      <main>
        <div className={styles.Home} id="Home">
          <div className={styles.leftPanel}>
            <div className={styles.logo}>
              <img className={styles.image} src="./logobig.jpg" alt="logo" />
              <animated.div style={props} className={styles.rectangle}>
                <h1 className={styles.arrow}>
                  <a className={styles.links} href="#Home">
                    ^
                  </a>
                </h1>
              </animated.div>
            </div>
            <ul className={styles.list}>
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
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  <a>Login</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.postContainer}>
            {allPosts.map((item) => (
              <Post
                key={item.id}
                id={item.id}
                catagory={item.catagory}
                title={item.title}
                summary={item.summary}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
