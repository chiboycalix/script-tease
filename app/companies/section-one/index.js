import React from "react";

const SectionOne = () => {
  return (
    <div className="xl:px-[5rem] px-[1rem] py-[1rem] lg:py-[5rem] flex flex-row justify-center">
      <div className="basis-[50%]">
        <h2 className="text-[#243046] text-[58px] font-black leadning-[64px]">
          WebFX Reviews: Learn What It’s Like to Work With <span className="text-primaryHue-700">WebFX</span>
        </h2>
        <p className="text-[21px] leading-[35px] text-[#0b1720] mt-[1rem]">
          Curious about what it’s like to work with WebFX? Explore our more than
          1,100 client testimonials and experience the impact of Digital
          Marketing That Drives Revenue.
        </p>
        <p className="text-[21px] leading-[35px] text-[#0b1720] mt-[1rem]">
          Hear from clients that partnered with WebFX for search engine
          optimization (SEO) services, pay-per-click (PPC) advertising services,
          web design services, social media services, and other digital
          marketing services to learn what it’s like to have our team on yours.
        </p>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default SectionOne;
