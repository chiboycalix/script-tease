"use client";
import Button from "@/components/button";
import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import ArrowIcon from "../../../assets/arrow.png";

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
        <motion.div
          className="absolute bg-gradient-to-r rounded-full from-green-500 to-slate-50
          
                     sm:w-[14rem] sm:h-[14rem] sm:top-[10rem] sm:left-[15rem]
                     md:w-[12rem] md:h-[12rem] md:top-[15rem] md:left-[26rem]
                     lg:w-[12rem] lg:h-[12rem] lg:top-[14rem] lg:left-[7rem]
                     xl:w-[17rem] xl:h-[17rem] xl:top-[12rem] 
                     2xl:w-[20rem] 2xl:h-[20rem] 2xl:top-[12rem] 2xl:left-[15rem]
                     "
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        ></motion.div>
        <div
          className="second absolute -z-50 bg-gradient-to-t from-blue-900 to-slate-50 -rotate-[25deg] rounded-3xl
          sm:w-[13rem] sm:h-[24rem]
          md:w-[11rem] md:h-[24rem]          
          lg:w-[11rem] lg:h-[24rem]           
                    xl:w-[12rem] xl:h-[24rem]
                    2xl:w-[15rem] 2xl:h-[24rem]"
        ></div>

        <motion.div
          className="absolute bg-gradient-to-tr from-orange-500 to-slate-50 rounded-full
          sm:w-[14rem] sm:h-[14rem] sm:top-[24rem] sm:-right-[13rem]
          md:w-[11rem] md:h-[11rem] md:top-[24rem] md:-right-[5rem]
                    lg:w-[11rem] lg:h-[11rem] lg:top-[20rem] lg:right-0
                    xl:w-[16rem] xl:h-[16rem]
                    2xl:w-[19rem] 2xl:h-[19rem]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        ></motion.div>

        <div
          className="fourth absolute bg-gradient-to-b from-green-600 to-slate-50 rounded-3xl -rotate-[25deg]
          sm:w-[13rem] sm:h-[24rem]
          md:w-[11rem] md:h-[24rem]                
          lg:w-[11rem] lg:h-[24rem]  
                    xl:w-[12rem] xl:h-[24rem]
                    2xl:h-[24rem] 2xl:w-[15rem]
          "
        ></div>
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
