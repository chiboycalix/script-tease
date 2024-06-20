import React from "react";
import { VerticalTabs } from "./vertical-tabs";
import Partners from "../sections/partners";
import { ParallaxScrollDemo } from "./scrolling-parallax";

const Item = ({ percentage, value }) => {
  return (
    <div>
      <p className="text-[#6adfd7] text-[48px] leading-[56px] font-extrabold">
        {percentage}
      </p>
      <p className="text-[#0b1720] text-[14px] leading-[22px] font-bold">
        {value}
      </p>
    </div>
  );
};
const Partnerships = () => {
  return (
    <div className="w-full p-[5rem] bg-primary-500 bg-opacity-5">
      <div className="w-full">
        <p className="text-center text-[48px] font-extrabold">
          Proprietary Technology for Smarter Marketing
        </p>
        <p className="text-center text-[21px] leading-[35px]">
          When you collaborate with WebFX, you receive unparalleled support from
          our dedicated digital marketing experts, complemented by the backbone
          of our award-winning technology. Together, businesses are empowered to
          make informed and strategic marketing decisions, ensuring they stay
          ahead in the ever-evolving digital landscape.
        </p>
      </div>
      <div className="mt-[5rem]">
        <VerticalTabs />
      </div>
      <div className="w-full grid grid-cols-4 mt-[5rem]">
        <Item percentage="100%" value="SET UP BY SKILLTEASE" />
        <Item percentage="$500K" value="BUILT-IN VALUE" />
        <Item percentage="20%" value="AVG INCREASE IN ROI" />
        <Item percentage="$1B" value="DATA POINTS THAT DRIVE DECISION MAKING" />
      </div>
      <div className="mt-[5rem]">
        <Partners />
      </div>
      <div className="mt-[5rem]">
        <ParallaxScrollDemo />
      </div>
    </div>
  );
};

export default Partnerships;
