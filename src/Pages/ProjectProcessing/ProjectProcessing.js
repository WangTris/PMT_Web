import React from "react";
import Default from "../../Components/Layout/Default";

const children = () => {
  return (
    <>
      <div class="relative h-[1024px] w-[1440px] bg-white">
        <div class="absolute left-[146px] top-[171px] font-['Inter'] text-[55px] font-bold text-black">
          Project Processing
        </div>
        <div class="absolute left-[183px] top-[366px] z-10 h-[54px] w-[54px]">
          <div class="absolute left-0 top-0 z-10 h-[54px] w-[54px] rounded-full bg-red-300 mix-blend-darken"></div>
          <div class="absolute left-[7px] top-[7px] z-10 h-10 w-10 rounded-full bg-red-600"></div>
        </div>
        <div class="absolute left-[183px] top-[475px] h-[54px] w-[54px]">
          <div class="absolute left-0 top-0 h-[54px] w-[54px] rounded-full bg-red-300 mix-blend-darken"></div>
          <div class="absolute left-[7px] top-[7px] h-10 w-10 rounded-full bg-red-600"></div>
        </div>
        <div class="absolute left-[183px] top-[584px] h-[54px] w-[54px]">
          <div class="absolute left-0 top-0 h-[54px] w-[54px] rounded-full bg-red-300 mix-blend-darken"></div>
          <div class="absolute left-[7px] top-[7px] h-10 w-10 rounded-full bg-red-600"></div>
        </div>
        <div class="absolute left-[183px] top-[257px] h-[54px] w-[54px]">
          <div class="absolute left-0 top-0 h-[54px] w-[54px] rounded-full bg-red-300 mix-blend-darken"></div>
          <div class="absolute left-[7px] top-[7px] h-10 w-10 rounded-full bg-red-600"></div>
          <div class="absolute left-0 top-0 h-[54px] w-[54px]">
            <div class="absolute left-0 top-0 h-[54px] w-[54px] rounded-full bg-red-300 mix-blend-darken"></div>
            <div class="absolute left-[7px] top-[7px] h-10 w-10 rounded-full bg-red-600"></div>
          </div>
        </div>
        <div class="absolute left-[268px] top-[269px] font-['Inter'] text-2xl font-bold text-zinc-300">
          Khảo sát thực tế và nhu cầu khách hàng
        </div>
        <div class="absolute left-[268px] top-[378px] font-['Inter'] text-2xl font-bold text-zinc-300">
          Chọn máy phù hợp và thiết kế{" "}
        </div>
        <div class="absolute left-[268px] top-[487px] font-['Inter'] text-2xl font-bold text-zinc-300">
          Tổ chức thi công lắp đặt
        </div>
        <div class="absolute left-[268px] top-[596px] font-['Inter'] text-2xl font-bold text-zinc-300">
          Hoàn thiện và vận hành
        </div>
        <div class="absolute left-[1061px] top-[446px] font-['Inter'] text-2xl font-bold text-black">
          HÌNH
        </div>
        <div class="absolute left-[580px] top-[838px] h-[92px] w-[279px] rounded-xl bg-red-600"></div>
        <div class="absolute left-[636px] top-[869px] font-['Inter'] text-2xl font-bold text-zinc-300">
          GET STARTED
        </div>
        <div class="absolute left-[92px] top-[740px] h-[18px] w-[1255px] bg-zinc-800"></div>
      </div>
    </>
  );
};

export default function ProjectProcessing() {
  return <Default>{children}</Default>;
}
