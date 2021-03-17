import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
