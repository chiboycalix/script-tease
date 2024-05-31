import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import BlogOne from "@/assets/blog-1.png";

const Blogs = () => {
  return (
    <BentoGrid className="w-full mx-auto mt-[4rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          slug={item.slug}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: BlogOne,
    slug: 'the-dawn-of-innovation'
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: BlogOne,
    slug: 'the-digital-revolution'
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
export default Blogs;