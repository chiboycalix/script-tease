"use client";
import React from "react";
import { CenteredTextBlock, Metrics } from "../components";
import TabComponent from "../tab";
import { univeristies } from "../tab/data";
import Partners from "@/app/sections/partners";
import { useWindowSize } from "@uidotdev/usehooks";
import { SCREEN_SIZES } from "@/constants";
import { universitiesData } from "../data/metrics";

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

      <Metrics data={universitiesData}/>

      <div className="mt-[5rem]">
        <Partners />
      </div>
    </div>
  );
};

export default Univeristies;
