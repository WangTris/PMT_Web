import React from "react";

const Partner = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-[36px] font-bold mb-8">CÁC ĐỐI TÁC KHÁCH HÀNG</h2>
      <div className="flex justify-center items-center mb-6">
        <div className="border-t border-black w-1/4 border-2"></div>
        <div className="mx-4">
          <div className="w-24 h-5 rounded-full bg-black"></div>
        </div>
        <div className="border-t border-black w-1/4 border-2"></div>
      </div>
      <div className="flex justify-between px-10">
        {/* Repeat this div for each partner logo placeholder */}
        <div className="w-32 h-32 bg-gray-300"></div>
        <div className="w-32 h-32 bg-gray-300"></div>
        <div className="w-32 h-32 bg-gray-300"></div>
        <div className="w-32 h-32 bg-gray-300"></div>
        <div className="w-32 h-32 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Partner;
