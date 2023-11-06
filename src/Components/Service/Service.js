import React from "react";
// images
import { ReactComponent as Logo } from "../../assets/img/logo/logo.svg";

const ServiceCard = ({ title }) => {
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="h-[400px] w-[350px] bg-slate-500"></div>
      <div className="flex w-full items-center justify-between bg-black px-4 py-2 text-white">
        <span className="font-primary text-[36px] font-bold">{title}</span>
        <div className="h-[40px] w-[40px] rounded-md bg-red-500"></div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-24 text-center text-[36px] font-bold leading-10">
          SERVICES WE'RE OFFERING
        </h2>
        <div className="mb-24 flex justify-evenly">
          <ServiceCard title="Products" />
          <ServiceCard title="Installation" />
          <ServiceCard title="Guarantee" />
        </div>
        <div className="flex items-center justify-center">
          <Logo className="mr-[15px] h-[100px] w-[96px]" />
          <span className="text-[36px] font-bold text-primary">
            GET A QUOTE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
