import React from "react";

const Partner = () => {
  return (
    <div className="container mx-auto py-10 text-center">
      <h2 className="mb-8 text-[36px] font-bold">CÁC ĐỐI TÁC KHÁCH HÀNG</h2>
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
    </div>
  );
};

export default Partner;
