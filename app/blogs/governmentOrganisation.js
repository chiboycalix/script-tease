import React from "react";
import BlogOne from "@/assets/blog-1.png";
import GovernmentBlog from "../sections/governmentBlogs";
import { BlogCategoryTitle, BottomBlog } from "./universities";

const GovernmentOrganisation = () => {
  return (
    <div className="mt-[5rem]">
      <BlogCategoryTitle category="Government Organization" />

      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
        <GovernmentBlog />
        <BottomBlog
          img={BlogOne}
          category="WEB DESIGN"
          title="40 Simple Minimalist Web Design Examples (Inspiration)"
          shortDesctiption="Keep reading to learn more about the meaning of SEO services,
                including how much they cost, what they should include, and how
                to find the best type of SEO service."
          readTime="2 mins read"
        />
      </div>
    </div>
  );
};

export default GovernmentOrganisation;
