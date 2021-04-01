import prisma from "../lib/prisma";
import Link from "next/link";
export const getServerSideProps = async () => {
  const cookingSeries = await prisma.post.findMany({
    where: { catagory: "cooking" },
  });
  const thoughtSeries = await prisma.post.findMany({
    where: { catagory: "thoughts" },
  });
  return {
    props: { cooking: cookingSeries, thoughts: thoughtSeries },
  };
};

function Series({ cooking, thoughts }) {
  return (
    <>
      <div className="Series">
        <section>
          <h1 className="cooking">Cooking</h1>
          <ul>
            {cooking.map((item) => (
              <li>
                <Link href={`/posts/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h1 className="thoughts">Thoughts</h1>
          <ul>
            {thoughts.map((item) => (
              <li>
                <Link href={`/posts/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <style jsx>{`
        .Series {
          height: 80vh;
        }
        h1 {
          font-size: 2em;
          margin-left: 10px;
        }
        ul {
          list-style: none;
        }
        li {
          border: black solid thin;
          font-size: 2em;
          margin-right: 35px;
          padding: 10px;
          max-width: 800px;
        }
        li a {
          color: black;
        }
      `}</style>
    </>
  );
}

export default Series;
