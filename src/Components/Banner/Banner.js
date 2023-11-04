import React from "react";

const Banner = () => {
  return (
    <section className="h-[502px] flex items-center justify-center bg-black">
      <div className="container mx-auto text-white space-y-16">
        <h1 className="text-[64px] font-extrabold uppercase leading-8">
          slogan
        </h1>
        <p className="text-[22px] font-semibold">Sub slogan</p>
      </div>
    </section>
  );
};

export default Banner;
