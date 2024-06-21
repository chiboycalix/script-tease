import React from "react";
import GovernmentOrganisationBlogs from "./governmentOrganisation";
import CompaniesBlogs from "./companies";
import UniversitiesBlogs from "./universities";
import StudentsBlogs from "../sections/studentsBlogs";

const Blogs = () => {
  return (
    <div className="w-full lg:p-[5rem] md:p-[3rem] p-[1rem]">
      <UniversitiesBlogs />
      <CompaniesBlogs />
      <GovernmentOrganisationBlogs />
      <StudentsBlogs />
    </div>
  );
};

export default Blogs;
