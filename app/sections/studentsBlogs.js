import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import Link from "next/link";
import { BlogCategoryTitle } from "../blogs/universities";

const studentsBlogs = [
  {
    id: 1,
    img: BlogOne,
    title:
      "Transform Your Education: The Benefits of Joining SkillTribe as a Student",
    category: "WEB DESIGN",
    slug: "the-benefits-of-joining-skill-tribe-as-a-student",
  },
  {
    id: 2,
    img: BlogOne,
    title:
      "Building Your Career: How SkillTribe Prepares You for the Job Market",
    category: "SEO",
    slug: "how-skill-tribe-prepares-you-for-the-job-market",
  },
  {
    id: 3,
    img: BlogOne,
    title:
      "Earn While You Learn: Financial Opportunities Through SkillTribe Projects",
    category: "WEB DESIGN",
    slug: "financial-opportunities-through-skill-tribe-projects",
  },
];

const StudentBlogs = () => {
  return (
    <div className="mt-[5rem]">
      <BlogCategoryTitle category="Students" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-[2rem]">
        {studentsBlogs.map((studentsBlog) => {
          return (
            <div className="rounded-md" key={studentsBlog.id}>
              <Image
                src={studentsBlog.img}
                alt="BlogOne"
                className="rounded-md h-[200px]"
              />
              <Link href={`/blogs/${studentsBlog.slug}`}>
              <div className="mt-[1rem] cursor-pointer">
                <p className="text-[18px] font-bold text-primary-500">
                  {studentsBlog.category}
                </p>
                <p className="text-[21px] font-extrabold hover:text-primary-500 cursor-pointer mt-[0.5rem]">
                  {studentsBlog.title}
                </p>

                <p className="text-[#869298] text-[16px] mt-[1rem]">
                  2 min read
                </p>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentBlogs;
