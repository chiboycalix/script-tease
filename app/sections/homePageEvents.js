import React from "react";
import BlogOne from "@/assets/blog-1.png";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import "@/components/styles/home-page-events.css";

const homePageEvents = [
  {
    id: 1,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "WEB DESIGN",
  },
  {
    id: 2,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "SEO",
  },
  {
    id: 3,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "WEB DESIGN",
  },
  {
    id: 4,
    img: BlogOne,
    title: "17 Top Web Design Tools to Create an Impressive Site in 2024",
    category: "MARKETING",
  },
];
const HomePageEvents = () => {
  return (
    <div className="grid gap-16 lg:grid-cols-2 grid-cols-1">
      {homePageEvents.map((homePageEvent) => {
        return (
          <div
            className="relative flex items-center justify-center w-full"
            key={homePageEvent.id}
          >
            <DirectionAwareHover imageUrl={homePageEvent.img}>
              <p className="font-bold text-xl">{homePageEvent.category}</p>
              <p className="font-normal text-sm">{homePageEvent.title}</p>
            </DirectionAwareHover>
          </div>
        );
      })}
    </div>
  );
};

export default HomePageEvents;
