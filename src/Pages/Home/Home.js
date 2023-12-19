import React from "react";
import Default from "../../Components/Layout/Default";
import Banner from "./Banner/Banner";
import Partner from "./Partner/Partner";
import Service from "./Service/Service";

const children = () => {
  return (
    <>
      <Banner />
      <Service />
      <Partner />
    </>
  );
};

export default function () {
  return <Default>{children}</Default>;
}
