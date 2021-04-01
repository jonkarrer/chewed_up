import prisma from "../../lib/prisma";
import Link from "next/link";
export const getStaticPaths = async () => {
  const data = await prisma.post.findMany();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await prisma.post.findUnique({
    where: {
      id: `${id}`,
    },
  });

  return {
    props: { posts: data },
  };
};
const PostTemplate = ({ posts }) => {
  return (
    <>
      <div className="back">
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </div>
      <div className="container">
        <div className="card-container">
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </div>
      </div>
      <style jsx>{`
        a {
          margin: 20px;
          font-size: 2em;
          color: blue;
        }
        .container {
          height: auto;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-container {
          border: lightgrey solid thin;
          width: 90%;
          max-width: 800px;
          height: auto;
          margin-top: 40px;
          margin-bottom: 40px;
        }
        h1 {
          margin: 25px;
        }
        p {
          margin: 25px;
          font-size: 1.4em;
          white-space: pre-wrap;
          overflow-wrap: break-word;
        }
      `}</style>
    </>
  );
};

export default PostTemplate;
