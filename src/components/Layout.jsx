import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <header className="container">
        <Navbar />
      </header>

      <main className="main-content container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
