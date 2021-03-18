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
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-container {
          border: grey solid thin;
          width: 60%;
          box-shadow: grey 10px 10px 10px;
        }
        h1 {
          color: red;
          margin: 20px;
        }
        p {
          margin: 20px;
          font-size: 1.2em;
        }
      `}</style>
    </div>
  );
};

export default PostTemplate;
