import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import Link from "next/link";
import "@/components/styles/home-page-blog.css";

const universitiesBlogs = [
  {
    id: 1,
    img: BlogOne,
    title:
      "Enhancing Education: How Universities Can Leverage SkillTribe for Student Success",
    category: "WEB DESIGN",
    slug: "how-universities-can-leverage-skill-tribe-for-student-success",
  },
  {
    id: 2,
    img: BlogOne,
    title:
      "Bridging the Gap: University-Industry Collaboration Through SkillTribe",
    category: "SEO",
    slug: "university-industry-collaboration-through-skill-tribe",
  },
  {
    id: 3,
    img: BlogOne,
    title:
      "Innovative Learning: Integrating Real-World Projects into University Curricula with SkillTribe",
    category: "WEB DESIGN",
    slug: "integrating-real-world-projects-into-university-curricula-with-skill-tribe",
  },
  {
    id: 4,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "MARKETING",
  },
];
const UniversitiesBlog = () => {
  return (
    <div className="grid grid-cols-4 gap-10 mt-[2rem]">
      {universitiesBlogs.map((universitiesBlog) => {
        return (
          <div className="rounded-md" key={universitiesBlog.id}>
            <Image
              src={BlogOne}
              alt="BlogOne"
              className="rounded-md h-[200px]"
            />
            <Link href={`/blogs/${universitiesBlog.slug}`}>
              <div className="mt-[1rem] cursor-pointer">
                <p className="text-[18px] font-bold text-[#207de9]">
                  {universitiesBlog.category}
                </p>
                <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
                  {universitiesBlog.title}
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

export default UniversitiesBlog;
