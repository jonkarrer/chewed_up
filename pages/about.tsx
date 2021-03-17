function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        Everyone has a story to tell. Without our memories to share we are empty
        vessels. Without anyone to share them with, we are empty souls. A blog
        can spread stories much like a book in a store or library. The person
        that comes along to read that book has a chance to listen to someones
        story. This blog serves as a passage way for my experiences, thoughts,
        and expressions. Thank you for taking the time to read them.
      </p>
      <style jsx>{`
        .About {
          height: 100vh;
          margin-top: 70px;
        }
        h1 {
          color: #bfbfbf;
          margin-left: 20px;
          font-size: 3em;
          margin-botton: 10px;
        }
        p {
          margin: 20px;
          font-size: 1.5em;
        }
      `}</style>
    </div>
  );
}

export default About;
