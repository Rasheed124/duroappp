"use client";

import NavbarMain from "./NavBarMain";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";

const Layout = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return (
    <>
      {route === "/" ? <Navbar /> : null}

      {route !== "/" && route !== "/about" ? <NavbarMain /> : null}
      {route == "all" ? <NavbarMain /> : null}

      {children}

      {route == "about" && <Footer />}

      {route !== "/" && route == "/all" ? <Footer /> : null}
    </>
  );
};
export default Layout;
