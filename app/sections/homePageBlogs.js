import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import "@/components/styles/home-page-blog.css";

const homePageBlogs = [
  {
    id: 1,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "WEB DESIGN"
  },
  {
    id: 2,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "SEO"
  },
  {
    id: 3,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "WEB DESIGN"
  },
  {
    id: 4,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "MARKETING"
  },
];
const HomePageBlogs = () => {
  return (
    <div className="home-page-blog__wrapper">
      {homePageBlogs.map((homePageBlog) => {
        return (
          <div key={homePageBlog.id} className="flex justify-between gap-5 items-start pb-[2rem] border-b-[1px] cursor-pointer border-[#CFD4D8]">
            <div className="basis-[35%] hover:scale-105">
              <Image src={homePageBlog.img} className="rounded-md h-[8.3rem]" alt="homePageBlog.img"/>
            </div>
            <div className="flex-1">
              <p className="text-[18px] font-bold leading-[22px] mb-2 text-primary">{homePageBlog.category}</p>
              <p className="text-[21px] font-extrabold leading-[29px] hover:text-primary">{homePageBlog.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePageBlogs;
