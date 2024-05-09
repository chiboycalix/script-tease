"use client";
import React from "react";
import Button from "@/components/button";
import Link from "next/link";
import { motion } from "framer-motion";

import MenuIcon from "../assets/menu.png";
import ArrowIcon from "../assets/arrow.png";
import CloseIcon from "../assets/close.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhoWeServe from "@/drop-downs/who-we-serve";
import "./styles/header.css";
import OurProgram from "@/drop-downs/our-program";
import Solutions from "@/drop-downs/solutions";
import Resources from "@/drop-downs/resources";
import About from "@/drop-downs/about";

const variants = {
  hidden: { opacity: 0, x: 0, y: -3 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [isWhoWeServeHovered, setIsWhoWeServeHovered] = React.useState(false);
  const [isOurProgramHovered, setIsOurProgramHovered] = React.useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = React.useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = React.useState(false);
  const [isAboutHovered, setIsAboutHovered] = React.useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="xs:bg-white xs:px-4 xs:py-4 xs:flex xs:justify-between xs:items-center 
      xl:py-6 xl:px-24 xl:gap-8 xl:items-center
      bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] relative"
    >
      <div className="xl:basis-1">
        <h1 className="xs:text-[20px] md:text-[35px]">
          <Link href="/">
            Scr<span className="text-[#F58923]">ipt</span>Tease
          </Link>
        </h1>
      </div>
      <div className="xl:hidden">
        <Button
          hasIcon
          caption="Menu"
          icon={showMenu ? CloseIcon : MenuIcon}
          onClick={handleToggleMenu}
          hasBorder
        />
      </div>
      {showMenu && (
        <motion.div
          className="xs:px-4 xs:py-4 absolute top-[75px] left-0 bg-white w-screen xl:hidden"
          variants={variants}
          initial="hidden"
          animate={showMenu ? "enter" : "hidden"}
          transition={{ type: "linear", duration: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-lg font-light">Product</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="text-lg font-light">Solutions</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p className="text-lg font-light">Level Up</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <p className="text-lg font-light">Programs</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <p className="text-lg font-light">Partners</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                <p className="text-lg font-light">Resources</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                <p className="text-lg font-light">About</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      )}
      <div className="hidden xl:flex xl:justify-between xl:items-centers xl:gap-14 xl:flex-1">
        <ul className="flex justify-between items-center gap-10">
          <li
            onMouseEnter={() => setIsWhoWeServeHovered(true)}
            onMouseLeave={() => setIsWhoWeServeHovered(false)}
            className="text-[#086524] hover:underline underline-offset-8 decoration-[#086524] who-we-serve"
          >
            <Link href="/">Who we serve</Link>
            {isWhoWeServeHovered && (
              <motion.div
                className="who-we-serve__container"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <WhoWeServe />
              </motion.div>
            )}
          </li>
          <li
            onMouseEnter={() => setIsOurProgramHovered(true)}
            onMouseLeave={() => setIsOurProgramHovered(false)}
            className="hover:text-[#086524] hover:underline underline-offset-8 decoration-[#086524] our-program"
          >
            <Link href="/">Our Programs</Link>
            {isOurProgramHovered && (
              <motion.div
                className="our-program__container"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <OurProgram />
              </motion.div>
            )}
          </li>
          <li className="hover:text-[#086524] hover:underline underline-offset-8 decoration-[#086524]">
            <Link href="/partnerships">Partnerships</Link>
          </li>
          <li
            onMouseEnter={() => setIsSolutionsHovered(true)}
            onMouseLeave={() => setIsSolutionsHovered(false)}
            className="hover:text-[#086524] hover:underline underline-offset-8 decoration-[#086524] solutions"
          >
            <Link href="/">Solutions</Link>
            {isSolutionsHovered && (
              <motion.div
                className="solutions__container"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Solutions />
              </motion.div>
            )}
          </li>
          <li
            onMouseEnter={() => setIsResourcesHovered(true)}
            onMouseLeave={() => setIsResourcesHovered(false)}
            className="hover:text-[#086524] hover:underline underline-offset-8 decoration-[#086524] resources"
          >
            <Link href="/">Resources</Link>
            {isResourcesHovered && (
              <motion.div
                className="resources__container"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Resources />
              </motion.div>
            )}
          </li>
          <li onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
           className="hover:text-[#086524] hover:underline underline-offset-8 decoration-[#086524] about">
            <Link href="/">About</Link>
            {isAboutHovered && (
              <motion.div
                className="about__container"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            )}
          </li>
        </ul>
        <div className="flex justify-center items-center gap-4">
          <Link href="/" className="hover:text-[#086524]">
            Login
          </Link>
          <Button caption="Get Started" hasIcon icon={ArrowIcon} hasBorder/>
        </div>
      </div>
    </div>
  );
};

export default Header;
