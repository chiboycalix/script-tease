import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import "@/components/styles/home-page-blog.css";
import Link from "next/link";

const homePageBlogs = [
  {
    id: 1,
    img: BlogOne,
    title: "Driving Innovation: How Companies Can Benefit from Partnering with SkillTribe",
    category: "COMPANIES",
    slug: "how-companies-can-benefit-from-partnering-with-skill-tribe"
  },
  {
    id: 2,
    img: BlogOne,
    title: "Earn While You Learn: Financial Opportunities Through SkillTribe Projects",
    category: "STUDENTS",
    slug: "financial-opportunities-through-skill-tribe-projects",
  },
  {
    id: 3,
    img: BlogOne,
    title: "Bridging the Gap: University-Industry Collaboration Through SkillTribe",
    category: "UNIVERSITIES",
    slug: "university-industry-collaboration-through-skill-tribe",
  },
  {
    id: 4,
    img: BlogOne,
    title: "Investing in the Future: Government Support for Student Development via SkillTribe",
    category: "GOVERNMENT ORGANIZATION",
    slug: "government-support-for-student-development-via-skill-tribe",
  },
];
const HomePageBlogs = () => {
  return (
    <div className="grid gap-16 lg:grid-cols-2 grid-cols-1">
      {homePageBlogs.map((homePageBlog) => {
        return (
          <Link href={`/blogs/${homePageBlog.slug}`} key={homePageBlog.id}>
          <div className="flex flex-col sm:flex-row justify-between gap-5 items-start pb-[2rem] border-b-[1px] cursor-pointer border-[#CFD4D8]">
            <div className="basis-[35%] hover:scale-105">
              <Image src={homePageBlog.img} className="rounded-md md:h-[8.3rem]" alt="homePageBlog.img"/>
            </div>
            <div className="flex-1">
              <p className="text-[18px] font-bold leading-[22px] mb-2 text-primary-500">{homePageBlog.category}</p>
              <p className="text-[21px] font-extrabold leading-[29px] hover:text-primary-500">{homePageBlog.title}</p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePageBlogs;
