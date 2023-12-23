import React from "react";
// images
import { ReactComponent as Logo } from "../../../assets/img/logo/logo.svg";

const ServiceCard = ({ title }) => {
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="h-[50rem] w-full bg-slate-500 md:h-[40rem] md:w-[35rem]"></div>
      <div className="flex w-full items-center justify-between bg-black px-4 py-2 text-white">
        <span className="font-primary text-5xl font-bold">{title}</span>
        <div className="h-[4rem] w-[4rem] rounded-md bg-red-500"></div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-5xl font-bold leading-10 md:mb-24 md:text-6xl">
          SERVICES WE'RE OFFERING
        </h2>
        {/* Services */}
        <div className="mb-8 flex w-full flex-col justify-evenly space-y-8 md:mb-24 md:flex-row md:space-y-0">
          <ServiceCard title="Products" />
          <ServiceCard title="Installation" />
          <ServiceCard title="Guarantee" />
        </div>
        {/* Get a quote */}
        <div className="flex items-center justify-center">
          <Logo className="mr-4 h-40 w-40" />
          <span className="text-6xl font-bold text-primary">GET A QUOTE</span>
        </div>
      </div>
    </section>
  );
};

export default Service;
