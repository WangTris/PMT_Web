import React from "react";

const About = () => {
  return (
    <>
      <section className="absolute left-0 grid min-h-[65vh] w-screen grid-cols-5 md:min-h-[77.5vh]">
        {/* What makes us different? section */}
        <div className="col-span-2 flex items-center justify-center bg-accent p-10 text-white">
          <div className="mx-auto space-y-10">
            <h1 className="text-6xl font-extrabold uppercase">
              what makes us different?
            </h1>
            <p className="text-4xl font-semibold">
              Short description about our view
            </p>
          </div>
        </div>
        {/* KNOW US MORE section */}
        <div className="col-span-3 bg-accent2">
          <h1>Hihi</h1>
        </div>
      </section>

      {/* Spacer element to reserve space in the document flow */}
      <div className="min-h-[65vh] py-8 md:min-h-[77.5vh]" />

      {/* KNOW US MORE section */}
      <section className="py-10 text-center">
        <div className="container mx-auto">
          {/* Title */}
          <h1 className="mb-8 text-center text-5xl font-bold leading-10 md:mb-24 md:text-6xl">
            KNOW US MORE
          </h1>
          {/* Button */}
          <div className="flex justify-around space-x-4">
            <button className="border-2 border-primary px-28 py-10 text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
              <span className="font-primary text-4xl font-bold uppercase">
                Projects
              </span>
            </button>
            <button className="border-2 border-primary px-28 py-10 text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
              <span className="font-primary text-4xl font-bold uppercase">
                news
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
