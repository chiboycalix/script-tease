"use client";
import Button from "@/components/button";
import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../../assets/arrow.png";
import "./home.css";

const FirstSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <motion.div
        className="2xl:basis-4/12 xl:basis-5/12 lg:basis-6/12"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.5 }}
      >
        <div className="pl-10 py-20 lg:pl-24 lg:py-40 leading-10">
          <p className="text-3xl leading-10 tracking-wider">
            The #1 Work-Based Learning platform for educators, learners and
            employers.
          </p>
          <motion.div
            className="flex gap-5 mt-10 flex-col items-start lg:flex-row lg:items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
          >
            <div>
              <p className="text-[12px] text-center mb-1">
                Learners + Employers
              </p>
              <Button caption="Sign Up" bigBtn hasIcon icon={ArrowIcon} />
            </div>
            <div>
              <p className="text-[12px] text-center mb-1">
                Colleges + Universities
              </p>
              <Button caption="Book a demo" bigBtn hasIcon icon={ArrowIcon} />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex-1 relative">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
        <div className="fourth"></div>
      </div>
    </div>
  );
};

export default FirstSection;

{
  /* <img
src="https://assets-global.website-files.com/63eb3eaf146906eaa999e318/642dd721900ece4ec98f6876_676%203.webp"
loading="eager"
alt=""
/>
<img
src="https://assets-global.website-files.com/63eb3eaf146906eaa999e318/642dd6e4c16625e149a4cc16_6666%202%20(1).webp"
loading="lazy"
/> */
}
