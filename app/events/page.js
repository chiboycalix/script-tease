"use client";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./events.css";

export const projects = [
  {
    title: "Montreal Onboarding Fair",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: BlogOne,
    link: "",
    backgroundColor: "#4CC0B9",
    // backgroundColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "Montreal Onboarding Fair",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: BlogOne,
    link: "",
    backgroundColor: "#24B06C",
    // backgroundColor: "#2a2a2a",
    textColor: "#FFFFFF",
  },
  {
    title: "Montreal Onboarding Fair",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: BlogOne,
    link: "",
    backgroundColor: "#98CC63",
    // backgroundColor: "#555555",
    textColor: "#FFFFFF",
  },
  {
    title: "Montreal Onboarding Fair",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: BlogOne,
    link: "",
    backgroundColor: "#FED02C",
    // backgroundColor: "#808080",
    textColor: "#FFFFFF",
  },
  {
    title: "Montreal Onboarding Fair",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: BlogOne,
    link: "",
    backgroundColor: "#F6941C",
    // backgroundColor: "#aaaaaa",
    textColor: "#FFFFFF",
  },
  {
    title: "Montreal Onboarding Fair",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: BlogOne,
    link: "",
    backgroundColor: "#91268E",
    // backgroundColor: "#d5d5d5",
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

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
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
        <h2 className="text-[40px] font-black">{title}</h2>
        <div className="body">
          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <Image fill src={src} alt="image" />
            </motion.div>
          </div>

          <div className="description">
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
    <div className="w-full pt-[3rem] px-[5rem]" ref={container}>
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
