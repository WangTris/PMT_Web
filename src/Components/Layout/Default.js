import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";

export default function Default({ children: Children }) {
  return (
    <>
      <Header />
      <main className="container">
        <Children />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

Default.propTypes = {
  children: PropTypes.node,
};
