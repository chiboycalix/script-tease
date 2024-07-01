"use client";
import React from "react";
import Partners from "../../sections/partners";
import { CenteredTextBlock, Metrics } from "../components";
import TabComponent from "../tab";
import { companies } from "../tab/data";
import { useWindowSize } from "@uidotdev/usehooks";
import { SCREEN_SIZES } from "@/constants";
import { companiesData } from "../data/metrics";

const Companies = () => {
  const { width } = useWindowSize();
  return (
    <div className="w-full lg:p-[5rem] p-[2rem] bg-primary-500 bg-opacity-5">
      <CenteredTextBlock
        title="Elevate Success Through SkillTribe Collaboration"
        description="Organisations not only achieve their business objectives but also contribute to the professional growth of the next generation of leaders. This symbiotic relationship fosters innovation, growth, and excellence for all parties involved."
      />

      <div className="mt-[5rem]">
        {width < SCREEN_SIZES.IPAD ? (
          <TabComponent data={companies} value="access-to-top-talent" />
        ) : (
          <TabComponent
            data={companies}
            value="access-to-top-talent"
            orientation={"vertical"}
          />
        )}
      </div>

      <Metrics data={companiesData}/>
      <div className="mt-[5rem]">
        <Partners />
      </div>
    </div>
  );
};

export default Companies;
