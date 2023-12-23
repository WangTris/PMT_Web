import React from "react";

const Partner = () => {
  return (
    <section className="container mx-auto py-12 text-center">
      <h2 className="mb-8 text-5xl font-bold leading-10 md:text-6xl">
        CÁC ĐỐI TÁC KHÁCH HÀNG
      </h2>
      {/* Line break */}
      <div className="mb-6 flex items-center justify-center">
        <div className="w-1/4 border-2 border-t border-black"></div>
        <div className="mx-4">
          <div className="h-5 w-24 rounded-full bg-black"></div>
        </div>
        <div className="w-1/4 border-2 border-t border-black"></div>
      </div>
      <div className="flex justify-between px-10">
        {/* Repeat this div for each partner logo placeholder */}
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Partner;
