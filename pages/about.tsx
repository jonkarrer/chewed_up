function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <div className="card-container">
        <img src="/green.jpg" alt="imgage of me" />
        <p>
          Everyone has a story to tell. Without our memories to share we are
          empty vessels. Without anyone to share them with, we are empty souls.
          A blog can spread stories much like a book in a store or library. The
          person that comes along to read that book has a chance to listen to
          someones story. This blog serves as a passage way for my experiences,
          thoughts, and expressions. Thank you for taking the time to read them.
        </p>
      </div>
      <style jsx>{`
        .About {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          margin-top: 25px;
        }
        .card-container {
          display: flex;
          align-items: center;
          border: grey solid thin;
          width: 80%;
          max-width: 1000px;
          box-shadow: grey 10px 10px 10px;
        }
        .card-container img {
          object-fit: fill;
          height: 300px;
          margin: 20px;
        }
        h1 {
          color: #bfbfbf;
          margin-left: 20px;
          font-size: 3em;
          margin-botton: 10px;
        }
        p {
          margin: 40px;
          font-size: 1.5em;
          white-space: pre-wrap;
          overflow-wrap: break-word;
        }
        @media (max-width: 900px) {
          .About {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 25px;
            margin-bottom: 50px;
            height: auto;
          }
          .card-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border: grey solid thin;
            width: 90%;
            box-shadow: grey 10px 10px 10px;
          }
          .card-container img {
            object-fit: fill;
            height: 250px;
            margin: 20px;
          }
          p {
            margin: 30px;
            font-size: 1.3em;
            white-space: pre-wrap;
            overflow-wrap: break-word;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
