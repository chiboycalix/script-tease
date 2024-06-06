import React from "react";
import GovernmentOrganisationBlogs from "./governmentOrganisation";
import CompaniesBlogs from "./companies";
import UniversitiesBlogs from "./universities";
import LastSectionBlog from "./lastSection";

const Blogs = () => {
  return (
    <div className="w-full p-[5rem]">
      <UniversitiesBlogs />
      <CompaniesBlogs />
      <GovernmentOrganisationBlogs />
      <LastSectionBlog />
    </div>
  );
};

export default Blogs;
