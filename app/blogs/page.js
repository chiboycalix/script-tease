import React from "react";
import GovernmentOrganisationBlogs from "./governmentOrganisation";
import CompaniesBlogs from "./companies";
import UniversitiesBlogs from "./universities";
import StudentsBlogs from "../sections/studentsBlogs";

const Blogs = () => {
  return (
    <div className="w-full md:p-[5rem] p-[3rem]">
      <UniversitiesBlogs />
      <CompaniesBlogs />
      <GovernmentOrganisationBlogs />
      <StudentsBlogs />
    </div>
  );
};

export default Blogs;
