import prisma from "../lib/prisma";

export const getServerSideProps = async () => {
  const cookingSeries = await prisma.post.findMany({
    where: { catagory: "cooking" },
  });

  return {
    props: { cooking: cookingSeries },
  };
};

function Series({ cooking }) {
  return (
    <div className="Series">
      <section className="cooking">
        <h1>Cooking</h1>
        <ul>
          {cooking.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </section>
      <section className="cooking">
        <h1>Cooking</h1>
        <ul>
          {cooking.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Series;
