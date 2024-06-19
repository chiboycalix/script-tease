"use client";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./events.css";
import { CommunityImpactEvent, MeetAndGreet, MontrealLaunch, SkillTribeProfile, SpringFest } from "@/constants";
import { useWindowSize } from "@uidotdev/usehooks";

export const projects = [
  {
    title: "Community Impact Event",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: CommunityImpactEvent,
    link: "",
    backgroundColor: "#4CC0B9",
    // backgroundColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "Meet and Greet",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.’).",
    src: MeetAndGreet,
    link: "",
    backgroundColor: "#24B06C",
    // backgroundColor: "#2a2a2a",
    textColor: "#FFFFFF",
  },
  {
    title: "Montreal Launch",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: MontrealLaunch,
    link: "",
    backgroundColor: "#98CC63",
    // backgroundColor: "#555555",
    textColor: "#FFFFFF",
  },
  {
    title: "Skill Tribe Profile",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: SkillTribeProfile,
    link: "",
    backgroundColor: "#FED02C",
    // backgroundColor: "#808080",
    textColor: "#FFFFFF",
  },
  {
    title: "Spring Fest",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: SpringFest,
    link: "",
    backgroundColor: "#F6941C",
    // backgroundColor: "#aaaaaa",
    textColor: "#FFFFFF",
  },
];

const EventCard = ({
  i,
  title,
  description,
  src,
  backgroundColor,
  progress,
  range,
  targetScale,
  textColor,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const {width} = useWindowSize();

  const imageScale = useTransform(scrollYProgress, [0, width >= 640 ? 1 : 0], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <div className="body">
          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <Image fill src={src} alt="image" />
            </motion.div>
          </div>

          <div className="description">
          <h2 className="text-[24px] lg:text-[40px] font-black">{title}</h2>
            <p className="mb-[2rem]">{description}</p>
            <button
              className={`bg-white hover:bg-opacity-90 text-[${backgroundColor}] text-[20px] font-black w-[50%] py-[1rem] rounded-md cursor-pointer`}
            >
              GET TICKET
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Events = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full py-[5rem] sm:py-[3rem] xl:px-[5rem] px-[1rem] lg:px-[3rem] bg-primary-500 bg-opacity-5" ref={container}>
      <p className="text-[48px] font-black">Events</p>
      {projects.map((project, i) => {
        const targetScale = 1 - (project.length - i) * 0.05;
        return (
          <EventCard
            {...project}
            key={`p_${i}`}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Events;
