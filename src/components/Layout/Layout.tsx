import React, { ReactNode } from "react";
import GlobalStyle from "../../../styles/GlobalStyle";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface ILayoutProps {
  children: ReactNode;
  footerData: any;
}

const Layout = ({ children, footerData }: ILayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer footerData={footerData} />
    </>
  );
};

export default Layout;
