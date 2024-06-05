import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: BlogOne,
    slug: "the-dawn-of-innovation",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: BlogOne,
    slug: "the-digital-revolution",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: BlogOne,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: BlogOne,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: BlogOne,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: BlogOne,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: BlogOne,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: BlogOne,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: BlogOne,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: BlogOne,
  },
];

const Blogs = () => {
  return (
    <div className="w-full p-[5rem]">
      <div>
        <div className="flex justify-start items-center gap-4">
          <div className="w-[32px] h-[32px] rounded-full bg-[#207CE8]"></div>
          <div>
            <p className="text-[32px] font-extrabold">Univerities</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-[2rem]">
          <div className="rounded-md">
            <Image
              src={BlogOne}
              alt="BlogOne"
              className="rounded-md h-[200px]"
            />
            <div className="mt-[1rem] cursor-pointer">
              <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
              <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
                40 Simple Minimalist Web Design Examples (Inspiration)
              </p>

              <p className="text-[#869298] text-[16px] mt-[1rem]">
                22 min read
              </p>
            </div>
          </div>
          <div className="rounded-md">
            <Image
              src={BlogOne}
              alt="BlogOne"
              className="rounded-md h-[200px]"
            />
            <div className="mt-[1rem] cursor-pointer">
              <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
              <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
                40 Simple Minimalist Web Design Examples (Inspiration)
              </p>

              <p className="text-[#869298] text-[16px] mt-[1rem]">
                22 min read
              </p>
            </div>
          </div>
          <div className="rounded-md">
            <Image
              src={BlogOne}
              alt="BlogOne"
              className="rounded-md h-[200px]"
            />
            <div className="mt-[1rem] cursor-pointer">
              <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
              <p className="text-[21px] font-extrabold hover:text-[#207de9] mt-[0.5rem]">
                40 Simple Minimalist Web Design Examples (Inspiration)
              </p>

              <p className="text-[#869298] text-[16px] mt-[1rem]">
                22 min read
              </p>
            </div>
          </div>
          <div className="rounded-md">
            <Image
              src={BlogOne}
              alt="BlogOne"
              className="rounded-md h-[200px]"
            />
            <div className="mt-[1rem] cursor-pointer">
              <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
              <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
                40 Simple Minimalist Web Design Examples (Inspiration)
              </p>

              <p className="text-[#869298] text-[16px] mt-[1rem]">
                22 min read
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-[5rem]">
        <div className="rounded-md bg-[#EFF6FE]">
            <Image
              src={BlogOne}
              alt="BlogOne"
              className="h-[400px] rounded-t-md"
            />
            <div className="mt-[1rem] cursor-pointer p-[2rem]">
              <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
              <p className="text-[32px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
                40 Simple Minimalist Web Design Examples (Inspiration)
              </p>
              <p className="text-[18px] mt-[1rem]">Keep reading to learn more about the meaning of SEO services, including how much they cost, what they should include, and how to find the best type of SEO service.</p>

              <p className="text-[#869298] text-[16px] mt-[2rem]">
                22 min read
              </p>
            </div>
        </div>
        <div className="rounded-md bg-[#EFF6FE]">
            <Image
              src={BlogOne}
              alt="BlogOne"
              className="h-[400px] rounded-t-md"
            />
            <div className="mt-[1rem] cursor-pointer p-[2rem]">
              <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
              <p className="text-[32px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
                40 Simple Minimalist Web Design Examples (Inspiration)
              </p>
              <p className="text-[18px] mt-[1rem]">Keep reading to learn more about the meaning of SEO services, including how much they cost, what they should include, and how to find the best type of SEO service.</p>

              <p className="text-[#869298] text-[16px] mt-[2rem]">
                22 min read
              </p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
