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

export function VerticalTabs() {
  const data = [
    {
      label: "Actionable Analytics",
      value: "html",
      icon: UserCircleIcon,
      desc: (
        <div className="bg-[#00458E] w-[82%] ml-[9%] rounded-xl py-[5rem] px-[2rem]">
          <p className="text-center text-[24px] font-bold mb-[1.5rem]">
            Close the loop between marketing and revenue
          </p>
          <p className="text-[21px] leading-[35px] font-normal">
            MarketingCloudFX centralizes data and reports from various sources
            to give you a fuller, more accurate picture of your marketing
            performance.
          </p>
          <ul className="list-disc text-[18px] ml-[1rem] mt-[2rem] flex flex-col gap-5">
            <li className="font-normal">
              ROI dashboard to give you a complete view of your marketing impact
              per channel
            </li>
            <li className="font-normal">
              Content analytics tool to track the impact of content on your core
              business objectives
            </li>
            <li className="font-normal">
              Call tracking and ai conversation analysis that sheds light on
              phone call leads from specific marketing channels
            </li>
            <li className="font-normal">
              Easy-to-access archive of all reports across services, departments
              and campaigns
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "Data Empowerment",
      value: "react",
      icon: Square3Stack3DIcon,
      desc: (
        <div className="bg-[#00458E] w-[82%] ml-[9%] rounded-xl py-[5rem] px-[2rem]">
          <p className="text-center text-[24px] font-bold mb-[1.5rem]">
            Refine targeting and drive more qualified leads
          </p>
          <p className="text-[21px] leading-[35px] font-normal">
            As a customer data platform and marketing software all in one,
            MarketingCloudFX allows our clients to store, enrich, and activate
            their data.
          </p>
          <ul className="list-disc text-[18px] ml-[1rem] mt-[2rem] flex flex-col gap-5">
            <li className="font-normal">
              Centralize and enrich user data from website visits, calls, and
              forms to get a unified view of the customer journey
            </li>
            <li className="font-normal">
              Automatically create new audience segments that can be used to
              reach your audience across their multi-touchpoint journey
            </li>
            <li className="font-normal">
              Monitor competitor marketing strategies with data compiled from
              many industry-leading tools
            </li>
            <li className="font-normal">
              Integrate with your sales CRM or leverage our built in CRM to
              leverage your sales data to refine your ad targeting and drive
              more qualified traffic to your site
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "Content Makerting",
      value: "vue",
      icon: Square3Stack3DIcon,
      desc: (
        <div className="bg-[#00458E] w-[82%] ml-[9%] rounded-xl py-[5rem] px-[2rem]">
          <p className="text-center text-[24px] font-bold mb-[1.5rem]">
            Improve, accelerate, and measure your web content
          </p>
          <p className="text-[21px] leading-[35px] font-normal">
            MarketingCloudFX makes content marketing seamless and efficient. Our
            content toolset helps improve content quality, accelerate content
            creation, and measure content performance.
          </p>
          <ul className="list-disc text-[18px] ml-[1rem] mt-[2rem] flex flex-col gap-5">
            <li className="font-normal">
              Easily research, plan, and collaborate on content for your
              business
            </li>
            <li className="font-normal">
              Track the impact of all content on your core business objectives
            </li>
            <li className="font-normal">
              Rapidly deploy landing pages for PPC and email campaigns
            </li>
            <li className="font-normal">
              Personalize your content to increase engagement and conversion
              rate
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "Sales Enablement",
      value: "angular",
      icon: Cog6ToothIcon,
      desc: (
        <div className="bg-[#00458E] w-[82%] ml-[9%] rounded-xl py-[5rem] px-[2rem]">
          <p className="text-center text-[24px] font-bold mb-[1.5rem]">
            Empower your sales team to close more leads
          </p>
          <p className="text-[21px] leading-[35px] font-normal">
            MarketingCloudFX isn’t just for your marketing team. There are many
            tools and capabilities built to enable your sales team to close more
            prospective leads for your business.
          </p>
          <ul className="list-disc text-[18px] ml-[1rem] mt-[2rem] flex flex-col gap-5">
            <li className="font-normal">
              Find, monitor, and target ideal prospects for your business to
              drive more qualified leads to your sales team
            </li>
            <li className="font-normal">
              Instantly qualify and score incoming web leads to help your sales
              team prioritize the most qualified prospects
            </li>
            <li className="font-normal">
              Eliminate back and forth when booking appointments by allowing
              customers and prospects to directly select a time on your sales
              calendar
            </li>
            <li className="font-normal">
              Help your sales team close more deals with a customer relationship
              management tool that’s powerful and easy to use.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Tabs value="html" orientation="vertical">
      <TabsHeader
        className="w-[25rem] bg-transparent cursor-pointer rounded-[26px] text-[#207de9] mr-[1rem] text-left"
        indicatorProps={{
          className: "custom_shadow",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className="py-[2rem] text-[18px] font-bold hover:text-[#207de9] justify-start px-[20px] text-left mb-[1rem]"
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
