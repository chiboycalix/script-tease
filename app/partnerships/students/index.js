"use client";
import React from "react";
import Partners from "../../sections/partners";
import { CenteredTextBlock, Item } from "../components";
import TabComponent from "../tab";
import { students } from "../tab/data";
import { useWindowSize } from "@uidotdev/usehooks";
import { SCREEN_SIZES } from "@/constants";

const Students = () => {
  const { width } = useWindowSize();
  const tabOrientation = width > 1024 ? "horizontal" : "vertical";
  return (
    <div className="w-full lg:p-[5rem] p-[2rem] bg-primary-500 bg-opacity-5">
      <CenteredTextBlock title="Title" description="Description" />

      <div className="mt-[5rem]">
        {width < SCREEN_SIZES.IPAD ? (
          <TabComponent data={students} value="enhanced-employability" />
        ) : (
          <TabComponent
            data={students}
            value="enhanced-employability"
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

export default Students;
