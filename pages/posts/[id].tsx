import prisma from '../../lib/prisma';

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
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </div>
  );
};

export default PostTemplate;
