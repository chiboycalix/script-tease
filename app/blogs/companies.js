import React from "react";
import CompaniesBlogs from "@/app/sections/companiesBlog";
import { BlogCategoryTitle } from "./universities";

const Companies = () => {
  return (
    <div className="mt-[5rem]">
      <BlogCategoryTitle category="Companies" />
      <CompaniesBlogs />
    </div>
  );
};

export default Companies;
