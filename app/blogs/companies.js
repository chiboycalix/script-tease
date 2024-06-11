import React from "react";
import CompaniesBlogs from "@/app/sections/companiesBlog";

const Companies = () => {
  return (
    <div className="mt-[5rem]">
      <div className="flex justify-start items-center gap-4 mb-[2rem]">
        <div className="w-[32px] h-[32px] rounded-full bg-[#207CE8]"></div>
        <div>
          <p className="text-[32px] font-extrabold">Companies</p>
        </div>
      </div>
      <CompaniesBlogs />
    </div>
  );
};

export default Companies;
