import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";

const children = () => {
  return (
    <>
      <Banner
        title="Installation"
        subtitle="PMT is the leading provider of industrial gases, including atmospheric and process gases. At PMT, we help you optimize every step of your process."
        buttonText="Contact us"
      />
      <main className="container mx-auto"></main>
    </>
  );
};

export default function Installation() {
  return <Default>{children}</Default>;
}
