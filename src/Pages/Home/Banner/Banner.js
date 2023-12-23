import React from "react";

const Banner = () => {
  return (
    <>
      <section className="absolute left-0 flex min-h-[65vh] w-screen items-center justify-center bg-black text-center text-white md:min-h-[77.5vh] md:justify-start md:text-left">
        <div className="container mx-auto flex flex-col">
          {/* <div
          className="absolute left-[2rem] top-[2rem] h-[65vh] w-full bg-gradient-to-r from-gray-900 to-black"
          style={{ transform: "skewY(-12deg)", transformOrigin: "0 0" }}
        ></div> */}

          {/* Slogan */}
          <div className="space-y-10">
            <h1 className="text-8xl font-extrabold uppercase leading-8">
              slogan
            </h1>
            <p className="text-4xl font-semibold">Sub slogan</p>
          </div>
        </div>
      </section>
      {/* Spacer element to reserve space in the document flow */}
      <div className="min-h-[65vh] py-8 md:min-h-[77.5vh]" />
    </>
  );
};

export default Banner;
