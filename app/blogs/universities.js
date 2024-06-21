import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import UniversitiesBlog from "../sections/universitiesBlog";

export const BottomBlog = ({
  img,
  category,
  title,
  shortDesctiption,
  readTime,
}) => {
  return (
    <div className="rounded-md bg-[#EFF6FE]">
      <Image
        src={img}
        alt="BlogOne"
        className="h-[200px] md:h-[400px] rounded-t-md"
      />
      <div className="mt-[1rem] cursor-pointer md:p-[2rem] p-[1rem]">
        <p className="text-[18px] font-bold text-primary-500">{category}</p>
        <p className="text-[20px] md:text-[32px] font-extrabold hover:text-primary-500 cursor-pointer mt-[0.5rem]">
          {title}
        </p>
        <p className="text-[18px] mt-[1rem]">{shortDesctiption}</p>
        <p className="text-[#869298] text-[16px] mt-[2rem]">{readTime}</p>
      </div>
    </div>
  );
};

export const BlogCategoryTitle = ({ category }) => {
  return (
    <div className="flex justify-start items-center gap-4 mb-[2rem]">
      <div className="w-[20px] h-[20px] md:w-[32px] md:h-[32px] rounded-full bg-primary-500"></div>
      <div>
        <p className="text-[20px] md:text-[32px] font-extrabold">{category}</p>
      </div>
    </div>
  );
};
const Universities = () => {
  return (
    <div>
      <BlogCategoryTitle category="Universities" />
      <div>
        <UniversitiesBlog />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-[5rem]">
          <BottomBlog
            img={BlogOne}
            category="WEB DESIGN"
            title="40 Simple Minimalist Web Design Examples (Inspiration)"
            shortDesctiption="Keep reading to learn more about the meaning of SEO services,
                including how much they cost, what they should include, and how
                to find the best type of SEO service."
            readTime="2 mins read"
          />
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
    </div>
  );
};

export default Universities;
