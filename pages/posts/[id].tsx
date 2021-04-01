import prisma from "../../lib/prisma";

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
    <div className="container">
      <div className="card-container">
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
      </div>
      <style jsx>{`
        .container {
          height: auto;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-container {
          border: grey solid thin;
          width: 90%;
          max-width: 1000px;
          height: auto;
          margin-top: 40px;
          margin-bottom: 40px;
          box-shadow: grey 10px 10px 10px;
        }
        h1 {
          margin: 25px;
        }
        p {
          margin: 25px;
          font-size: 1.2em;
          white-space: pre-wrap;
          overflow-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

export default PostTemplate;
