import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/components/material/MTailwind";
import "./tabs.css";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Description = ({ title, description, list }) => {
  return (
    <div className="bg-primary-950 w-[82%] ml-[9%] rounded-xl py-[5rem] px-[2rem] backdrop-brightness-0">
      <p className="text-center text-[24px] font-bold mb-[1.5rem]">{title}</p>
      <p className="text-[21px] leading-[35px] font-normal">{description}</p>
      <ul className="list-disc text-[18px] ml-[1rem] mt-[2rem] flex flex-col gap-5">
        {list.map((l, i) => {
          return (
            <li className="font-normal" key={i}>
              {l}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export function VerticalTabs() {
  const data = [
    {
      label: "Actionable Analytics",
      value: "html",
      icon: UserCircleIcon,
      desc: (
        <>
          <Description
            title="Close the loop between marketing and revenue"
            description="MarketingCloudFX centralizes data and reports from various sources
            to give you a fuller, more accurate picture of your marketing
            performance."
            list={[
              "ROI dashboard to give you a complete view of your marketing impact per channel",
              "Content analytics tool to track the impact of content on your core business objectives",
              "Call tracking and ai conversation analysis that sheds light on phone call leads from specific marketing channels",
              "Easy-to-access archive of all reports across services, departments and campaigns",
            ]}
          />
        </>
      ),
    },
    {
      label: "Data Empowerment",
      value: "react",
      icon: Square3Stack3DIcon,
      desc: (
        <>
          <Description
            title="Refine targeting and drive more qualified leads"
            description="As a customer data platform and marketing software all in one,
            MarketingCloudFX allows our clients to store, enrich, and activate
            their data."
            list={[
              "Centralize and enrich user data from website visits, calls, and forms to get a unified view of the customer journey",
              "Automatically create new audience segments that can be used to reach your audience across their multi-touchpoint journey",
              "Monitor competitor marketing strategies with data compiled from many industry-leading tools",
              "Integrate with your sales CRM or leverage our built in CRM to leverage your sales data to refine your ad targeting and drive more qualified traffic to your site",
            ]}
          />
        </>
      ),
    },
    {
      label: "Content Makerting",
      value: "vue",
      icon: Square3Stack3DIcon,
      desc: (
        <Description
          title="Improve, accelerate, and measure your web content"
          description="MarketingCloudFX makes content marketing seamless and efficient. Our
            content toolset helps improve content quality, accelerate content
            creation, and measure content performance."
          list={[
            "Easily research, plan, and collaborate on content for your business",
            "Track the impact of all content on your core business objectives",
            "Rapidly deploy landing pages for PPC and email campaigns",
            "Personalize your content to increase engagement and conversion rate",
          ]}
        />
      ),
    },
    {
      label: "Sales Enablement",
      value: "angular",
      icon: Cog6ToothIcon,
      desc: (
        <Description
          title="Empower your sales team to close more leads"
          description="MarketingCloudFX isn’t just for your marketing team. There are many
            tools and capabilities built to enable your sales team to close more
            prospective leads for your business."
          list={[
            "Find, monitor, and target ideal prospects for your business to drive more qualified leads to your sales team",
            "Instantly qualify and score incoming web leads to help your sales team prioritize the most qualified prospects",
            "Eliminate back and forth when booking appointments by allowing customers and prospects to directly select a time on your sales calendar",
            "Help your sales team close more deals with a customer relationship management tool that’s powerful and easy to use.",
          ]}
        />
      ),
    },
  ];

  return (
    <Tabs value="html" orientation="vertical">
      <TabsHeader
        className="w-[25rem] bg-transparent cursor-pointer rounded-[26px] text-primary-500 mr-[1rem] text-left"
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
                {React.createElement(icon, { className: "w-[50px] h-[50px]" })}
              </div>{" "}
              <p>{label}</p>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0 tabs-panel">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
