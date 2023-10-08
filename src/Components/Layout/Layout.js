import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>{title}</title>{" "}
        <meta
          name="description"
          content="Homestead is a website where you can search for the best home near you. Whether you want to buy, sell, or rent a home, Homestead can help you find the perfect match."
        />{" "}
        <meta
          name="keywords"
          content="homestead, home, real estate, buy, sell, rent"
        />{" "}
        <meta property="og:title" content={title} />{" "}
        <meta
          property="og:description"
          content="Homestead is a website where you can search for the best home near you. Whether you want to buy, sell, or rent a home, Homestead can help you find the perfect match."
        />{" "}
        <meta property="og:image" content="/images/logo.png" />{" "}
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Homestead - search best home near you  ",
};

export default Layout;
