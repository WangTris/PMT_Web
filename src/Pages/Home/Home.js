import React from "react";
import Default from "../../Components/Layout/Default";
import Banner from "./Banner/Banner";
import Partner from "./Partner/Partner";
import Service from "./Service/Service";
import About from "./About/About";

const children = () => {
  return (
    <>
      <Banner />
      <Partner />
      <Service />
      <About />
    </>
  );
};

export default function () {
  return <Default>{children}</Default>;
}
