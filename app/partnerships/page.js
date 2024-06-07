import React from "react";
import { VerticalTabs } from "./vertical-tabs";
import Partners from "../sections/partners";
import { ParallaxScrollDemo } from "./scrolling-parallax";

const Partnerships = () => {
  return (
    <div className="w-full p-[5rem]">
      <div className="w-full">
        <p className="text-center text-[48px] font-extrabold">Proprietary Technology for Smarter Marketing</p>
        <p className="text-center text-[21px] leading-[35px]">
          When you collaborate with WebFX, you receive unparalleled support from
          our dedicated digital marketing experts, complemented by the backbone
          of our award-winning technology. Together, businesses are empowered to
          make informed and strategic marketing decisions, ensuring they stay
          ahead in the ever-evolving digital landscape.
        </p>
        <div className="my-[5rem] w-full">
          <VerticalTabs />
          <div className="w-full grid grid-cols-4 mt-[5rem]">
            <div>
              <p className="text-[#6adfd7] text-[48px] leading-[56px] font-extrabold">100%</p>
              <p className="text-[#0b1720] text-[14px] leading-[22px] font-bold">SET UP BY SKILLTEASE</p>
            </div>
            <div>
              <p className="text-[#6adfd7] text-[48px] leading-[56px] font-extrabold">$500K</p>
              <p className="text-[#0b1720] text-[14px] leading-[22px] font-bold">BUILT-IN VALUE</p>
            </div>
            <div>
              <p className="text-[#6adfd7] text-[48px] leading-[56px] font-extrabold">20%</p>
              <p className="text-[#0b1720] text-[14px] leading-[22px] font-bold">AVG INCREASE IN ROI</p>
            </div>
            <div>
              <p className="text-[#6adfd7] text-[48px] leading-[56px] font-extrabold">$1B</p>
              <p className="text-[#0b1720] text-[14px] leading-[22px] font-bold w-[60%]">DATA POINTS THAT DRIVE DECISION MAKING</p>
            </div>
          </div>
        </div>
        <Partners />
      </div>

      <div className="mt-[5rem]">
        <ParallaxScrollDemo />
      </div>
    </div>
  );
};

export default Partnerships;
