"use client";
import React from "react";
import { CenteredTextBlock, Item } from "../components";
import TabComponent from "../tab";
import { univeristies } from "../tab/data";
import Partners from "@/app/sections/partners";
import { useWindowSize } from "@uidotdev/usehooks";
import { SCREEN_SIZES } from "@/constants";

const Univeristies = () => {
  const { width } = useWindowSize();

  return (
    <div className="w-full lg:p-[5rem] p-[2rem] bg-white">
      <CenteredTextBlock title="Title" description="description" />
      <div className="mt-[5rem]">
        {width < SCREEN_SIZES.IPAD ? (
          <TabComponent
            data={univeristies}
            value="enhanced-student-employability"
          />
        ) : (
          <TabComponent
            data={univeristies}
            value="enhanced-student-employability"
            orientation={"vertical"}
          />
        )}
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
    </div>
  );
};

export default Univeristies;
