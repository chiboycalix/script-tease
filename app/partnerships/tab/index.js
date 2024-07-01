import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/components/material/MTailwind";
import "./tabs.css";

const TabComponent = ({ data, value, orientation }) => {
  return (
    <Tabs value={value} orientation={orientation}>
      <TabsHeader
        className="lg:w-[25rem] w-full flex flex-col bg-transparent cursor-pointer rounded-[26px] text-primary-500 mr-[1rem] text-left"
        indicatorProps={{
          className: "custom_shadow",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className="py-[2rem] text-[18px] font-bold hover:text-primary-500 justify-start px-[20px] text-left mb-[1rem]"
          >
            <div className="flex items-center gap-5">
              <div>
                {React.createElement(icon, {
                  className: "w-[50px] h-[50px]",
                })}
              </div>{" "}
              <p>{label}</p>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="w-full">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0 tabs-panel w-full">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabComponent;
