import React from "react";

const Banner = () => {
  return (
    <section className="flex h-[502px] items-center justify-center bg-black">
      <div className="container mx-auto space-y-16 text-white">
        <h1 className="text-[64px] font-extrabold uppercase leading-8">
          slogan
        </h1>
        <p className="text-[22px] font-semibold">Sub slogan</p>
      </div>
    </section>
  );
};

export default Banner;
