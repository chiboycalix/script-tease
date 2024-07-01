import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";

const Metrics = ({ percentage, value }) => {
  return (
    <div>
      <h2 className="text-[48px] font-black text-primary-400">{percentage}</h2>
      <p className="font-extrabold text-[#6e7b81]">{value}</p>
    </div>
  );
};
const SectionTwo = () => {
  return (
    <div className="bg-primaryHue-900 xl:pr-[5rem] pr-[1rem] pt-[1rem] lg:pt-[7rem] flex flex-row justify-between gap-[10rem] mb-[50rem]">
      <div className="basis-[45%] relative">
        <Image src={BlogOne} alt="BlogOne" className="absolute left-0 -bottom-[50px] rounded-r-lg h-[420px]"/>
      </div>
      <div className="flex-1 relative">
        <div className="w-full pb-[1rem] lg:pb-[7rem]">
          <h2 className="text-white font-black text-[48px] leading-[56px]">
            All Pro Trailer Superstore
          </h2>
          <p className="text-[#ced4da] text-[18px] leading-[30px] mt-[1rem]">
            With WebFX by their side, All Pro Trailer Superstore consistently
            drives qualified traffic, leads, and revenue — all fueling the
            company’s growth.
          </p>
          <div className="flex w-[70%] mt-[1rem] gap-2">
            <Metrics percentage="113%" value="YTD SEO CONVERSION INCREASE" />
            <Metrics percentage="46%" value="YTD SEO USER INCREASE" />
          </div>

          <div className="bg-white absolute -bottom-[14rem] w-[80%]">
           <p className="text-[24px] font-medium leading-[36px]">“WebFX has helped us expand our digital footprint, not only in central PA and the mid-Atlantic, but also throughout the continental U.S.”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
