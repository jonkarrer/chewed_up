import styles from "../styles/Admin.module.css";
import Head from "next/head";
import { useState } from "react";
import Router from "next/router";

import prisma from "../lib/prisma";

export const getServerSideProps = async () => {
  const data = await prisma.post.findMany();

  return {
    props: { allPosts: data },
  };
};

async function destroy(id: number): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/admin");
}

function Admin({ allPosts }): JSX.Element {
  const [catagory, setCatagory] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = { catagory, title, summary, body };
      await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      await Router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
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
      <div className={styles.Admin}>
        <form className={styles.form} onSubmit={submitData}>
          <input
            className={styles.catagory}
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="Catagory"
            type="text"
            value={catagory}
          />
          <input
            className={styles.title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
            value={summary}
            cols={10}
            rows={5}
          ></textarea>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
            value={body}
            cols={70}
            rows={50}
          ></textarea>
          <input
            disabled={!catagory || !title || !summary || !body}
            type="submit"
            value="Create"
            className={styles.submit}
          />
        </form>
        <div className={styles.rightPanel}>
          <div className={styles.delete}>
            <ul>
              {allPosts.map((item) => (
                <li>
                  {item.title}, {item.id},{" "}
                  <button onClick={() => destroy(item.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.update}>
            <ul>
              {allPosts.map((item) => (
                <li>
                  {item.title}, {item.id}, <button>Update</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
