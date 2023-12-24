import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";

const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col space-y-10 pb-1 pt-12 font-primary">
      <div className="flex h-28 items-center justify-center rounded-2xl border-2 border-primary">
        <div className="text-5xl font-bold uppercase text-primary">{title}</div>
      </div>
      <div className="text-center text-4xl font-normal text-accent">
        {description}
      </div>
    </div>
  );
};

const Children = () => {
  return (
    <>
      <Banner title="Services" subtitle="" buttonText="Contact us" />
      <main className="container mx-auto">
        <Card
          title="Cung cấp thiết bị"
          description="Nói lảm nhảm về việc bán máy. Bao gồm phụ tùng máy móc"
        />
        <Card
          title="Cung cấp thiết bị"
          description="Nói lảm nhảm về việc bán máy. Bao gồm phụ tùng máy móc"
        />
        <Card
          title="Cung cấp thiết bị"
          description="Nói lảm nhảm về việc bán máy. Bao gồm phụ tùng máy móc"
        />
      </main>
    </>
  );
};

export default function Services() {
  return <Default>{Children}</Default>;
}
