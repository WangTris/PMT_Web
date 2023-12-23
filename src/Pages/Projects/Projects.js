import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";
import Carousel from "./Carousel";

const children = () => {
  return (
    <>
      <Banner title="Latest Projects" subtitle="" buttonText="Contact us" />
      <main className="container mx-auto py-14">
        <Carousel />
      </main>
    </>
  );
};

export default function Projects() {
  return <Default>{children}</Default>;
}
