import styles from "../styles/Post.module.css";
import Link from "next/link";

interface PostProps {
  id: number;
  catagory: string;
  title: string;
  summary: string;
}

const Post: React.FC<PostProps> = ({ id, catagory, title, summary }) => {
  return (
    <>
      <Link href={`/posts/${id}`}>
        <div className={styles.Post}>
          <div>
            <div
              className={styles.outerBlock}
              style={{ background: "slateblue" }}
            >
              <div className={styles.innerBlock}></div>
            </div>
          </div>
          <div className={styles.postContent}>
            <div className={styles.catagory}>{catagory}</div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.body}>{summary}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
