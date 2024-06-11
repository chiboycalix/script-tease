import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import Link from "next/link";
import "@/components/styles/home-page-blog.css";

const companiesBlogs = [
  {
    id: 1,
    img: BlogOne,
    title: "Driving Innovation: How Companies Can Benefit from Partnering with SkillTribe",
    category: "WEB DESIGN",
    slug: 'how-companies-can-benefit-from-partnering-with-skill-tribe',
  },
  {
    id: 2,
    img: BlogOne,
    title: "Accessing Top Talent: How SkillTribe Connects Companies with Future Industry Leaders",
    category: "SEO",
    slug: 'how-skillTribe-connects-companies-with-future-industry-leaders'
  },
  {
    id: 3,
    img: BlogOne,
    title: "Corporate Social Responsibility: Enhancing Community Impact with SkillTribe",
    category: "WEB DESIGN",
    slug: 'enhancing-community-impact-with-skill-tribe'
  },
  {
    id: 4,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "MARKETING"
  },
];
const CompaniesBlogs = () => {
  return (
    <div className="grid gap-16 lg:grid-cols-2 grid-cols-1">
      {companiesBlogs.map((companiesBlog) => {
        return (
          <div key={companiesBlog.id} className="flex flex-col sm:flex-row justify-between gap-5 items-start pb-[2rem] border-b-[1px] cursor-pointer border-[#CFD4D8]">
            <div className="basis-[35%] hover:scale-105">
              <Image src={companiesBlog.img} className="rounded-md h-[8.3rem]" alt="homePageBlog.img"/>
            </div>
            <div className="flex-1">
              <p className="text-[18px] font-bold leading-[22px] mb-2 text-primary">{companiesBlog.category}</p>
            <Link href={`/blogs/${companiesBlog.slug}`} prefetch>
              <p className="text-[21px] font-extrabold leading-[29px] hover:text-primary">{companiesBlog.title}</p>
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompaniesBlogs;
