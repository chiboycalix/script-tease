import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import Link from "next/link";
import "@/components/styles/home-page-blog.css";

const governmentBlogs = [
  {
    id: 1,
    img: BlogOne,
    title:
      "Fostering Innovation: The Role of Government Agencies in SkillTribe",
    category: "WEB DESIGN",
    slug: "the-role-of-government-agencies-in-skill-tribe",
  },
  {
    id: 2,
    img: BlogOne,
    title:
      "Public-Private Partnerships: Enhancing Community Development with SkillTribe",
    category: "SEO",
    slug: "enhancing-community-development-with-skill-tribe",
  },
  {
    id: 3,
    img: BlogOne,
    title:
    "Investing in the Future: Government Support for Student Development via SkillTribe",
    category: "WEB DESIGN",
    slug: "government-support-for-student-development-via-skill-tribe",
  },
  {
    id: 4,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "MARKETING",
  },
];
const GovernmentBlog = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {governmentBlogs.map((governmentBlog) => {
        return (
          <div className="rounded-md" key={governmentBlog.id}>
              <Image
                src={governmentBlog.img}
                alt="BlogOne"
                className="rounded-md h-[200px]"
              />
              <Link href={`/blogs/${governmentBlog.slug}`}>
              <div className="mt-[1rem] cursor-pointer">
                <p className="text-[18px] font-bold text-primary">
                  {governmentBlog.category}
                </p>
                <p className="text-[21px] font-extrabold hover:text-primary cursor-pointer mt-[0.5rem]">
                  {governmentBlog.title}
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
  );
};

export default GovernmentBlog;
