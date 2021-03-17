function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <h3>
        Email: <span>chewed_up@gmail.com</span>
      </h3>
      <h3>
        Linkedin: <span>Jon Karrer</span>
      </h3>
      <h3>
        Need a website? <span>nextweb.design</span>
      </h3>
      <style jsx>{`
        .Contact {
          height: 100vh;
          margin-top: 70px;
        }
        h1 {
          color: #bfbfbf;
          margin-left: 20px;
          font-size: 3em;
          margin-botton: 10px;
        }
        h3 {
          margin-left: 20px;
          font-size: 1.5em;
        }
      `}</style>
    </div>
  );
}

export default Contact;
