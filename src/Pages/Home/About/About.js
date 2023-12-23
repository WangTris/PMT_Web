import React from "react";
// images
import Logo1 from "../../../assets/img/group/project.png";
import Logo2 from "../../../assets/img/group/product.png";
import Logo3 from "../../../assets/img/group/service.png";

const About = () => {
  return (
    <>
      <section className="absolute left-0 min-h-[80vh] w-screen grid-rows-1 md:grid md:grid-cols-5">
        {/* What makes us different? section */}
        <div className="flex items-center justify-center bg-accent p-10 text-white md:col-span-2">
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
        <div className="col-span-3  flex items-center justify-start bg-accent2">
          <div className="my-4 ml-16 space-y-12">
            {/* Project */}
            <div className="flex items-center space-x-10">
              <div className="rounded-full border-2 border-primary p-2">
                <span className="flex h-40 w-40 items-center justify-center rounded-full bg-white text-center">
                  <img
                    src={Logo1}
                    alt="Project"
                    className="absolute flex h-32 w-32 items-center justify-center rounded-[2rem]"
                  />
                </span>
              </div>
              <span className="font-primary text-4xl font-bold uppercase text-primary">
                project processing
              </span>
            </div>
            {/* Product */}
            <div className="flex items-center space-x-10">
              <div className="rounded-full border-2 border-primary p-2">
                <span className="flex h-40 w-40 items-center justify-center rounded-full bg-white text-center">
                  <img
                    src={Logo2}
                    alt="Project"
                    className="absolute flex h-32 w-32 items-center justify-center rounded-[2rem]"
                  />
                </span>
              </div>
              <span className="font-primary text-4xl font-bold uppercase text-primary">
                product quality
              </span>
            </div>
            {/* Services */}
            <div className="flex items-center space-x-10">
              <div className="rounded-full border-2 border-primary p-2">
                <span className="flex h-40 w-40 items-center justify-center rounded-full bg-white text-center">
                  <img
                    src={Logo3}
                    alt="Project"
                    className="absolute flex h-32 w-32 items-center justify-center rounded-[2rem]"
                  />
                </span>
              </div>
              <span className="font-primary text-4xl font-bold uppercase text-primary">
                services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer element to reserve space in the document flow */}
      <div className="min-h-[65vh] py-8 md:min-h-[80vh]" />

      {/* KNOW US MORE section */}
      <section className="py-10 text-center">
        <div className="container mx-auto">
          {/* Title */}
          <h1 className="mb-8 text-center text-5xl font-bold leading-10 md:mb-24 md:text-6xl">
            KNOW US MORE
          </h1>
          {/* Button */}
          <div className="flex items-center  justify-center space-x-4 md:justify-around">
            <button className="border-2 border-primary px-8 py-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-white md:h-[7rem] md:w-[20rem]">
              <a
                href="/projects"
                className="font-primary text-4xl font-bold uppercase"
              >
                Projects
              </a>
            </button>
            <button className="border-2 border-primary px-8 py-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-white md:h-[7rem] md:w-[20rem]">
              <a
                href="/news"
                className="font-primary text-4xl font-bold uppercase"
              >
                news
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
