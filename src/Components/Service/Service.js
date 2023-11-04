import React from "react";
// images
import { ReactComponent as Logo } from "../../assets/img/logo/logo.svg";

const ServiceCard = ({ title }) => {
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="w-[350px] h-[400px] bg-slate-500"></div>
      <div className="w-full bg-black text-white py-2 px-4 flex justify-between items-center">
        <span className="text-[36px] font-primary font-bold">{title}</span>
        <div className="w-[40px] h-[40px] rounded-md bg-red-500"></div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-[36px] font-bold text-center mb-24 leading-10">
          SERVICES WE'RE OFFERING
        </h2>
        <div className="flex justify-evenly mb-24">
          <ServiceCard title="Products" />
          <ServiceCard title="Installation" />
          <ServiceCard title="Guarantee" />
        </div>
        <div className="flex items-center justify-center">
          <Logo className="h-[100px] w-[96px] mr-[15px]" />
          <span className="text-primary font-bold text-[36px]">
            GET A QUOTE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
