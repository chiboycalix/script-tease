import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import React from "react";
import './values.css';

const fertile = [
  {
    id: 1,
    letter: "F",
    color: "4CC0B9",
  },
  {
    id: 2,
    letter: "E",
    color: "24B06C",
  },
  {
    id: 3,
    letter: "R",
    color: "98CC63",
  },
  {
    id: 4,
    letter: "T",
    color: "FED02C",
  },
  {
    id: 5,
    letter: "I",
    color: "F6941C",
  },
  {
    id: 6,
    letter: "L",
    color: "F14C51",
  },
  {
    id: 7,
    letter: "E",
    color: "91268E",
  },
];

const Alphabets = ({ letter, paragraph, span, id }) => {
  return (
    <div className="relative mb-[2rem] h-[500px] sm:h-[700px] md:h-[900px] values">
      <div
        className={`w-full ${letter === "F" && "bg-[#4CC0B9]"}
                ${letter === "E" && id === 2 && "bg-[#24B06C]"}
                ${letter === "R" && "bg-[#98CC63]"}
                ${letter === "T" && "bg-[#FED02C]"}
                ${letter === "I" && "bg-[#F6941C]"}
                ${letter === "L" && "bg-[#F14C51]"}
                ${
                  letter === "E" && id === 7 && "bg-[#91268E]"
                } bg-opacity-10 mt-[22rem] sm:mt-[15rem] pt-[3rem] pb-[15rem]`}
      >
        <div className="flex justify-center items-center gap-[50px] sm:flex-row flex-col">
          <p
            className={`lg:text-[211px] sm:text-[180px] sm:leading-[180px] leading-[2px] text-[80px] font-black md:leading-[285px] ${
              letter === "F" && "text-[#4CC0B9]"
            }
                ${letter === "E" && id === 2 && "text-[#24B06C]"}
                ${letter === "R" && "text-[#98CC63]"}
                ${letter === "T" && "text-[#FED02C]"}
                ${letter === "I" && "text-[#F6941C]"}
                ${letter === "L" && "text-[#F14C51]"}
                ${letter === "E" && id === 7 && "text-[#91268E]"}`}
          >
            {letter}
          </p>
          <div className="w-[70%]">
            <p className="lg:text-[48px] sm:text-[32px] text-[20px] font-black">
              {paragraph}{" "}
              <span
                className={`${letter === "F" && "text-[#4CC0B9]"}
                ${letter === "E" && id === 2 && "text-[#24B06C]"}
                ${letter === "R" && "text-[#98CC63]"}
                ${letter === "T" && "text-[#FED02C]"}
                ${letter === "I" && "text-[#F6941C]"}
                ${letter === "L" && "text-[#F14C51]"}
                ${letter === "E" && id === 7 && "text-[#91268E]"}`}
              >
                {span}
              </span>
            </p>
          </div>
        </div>
        <div className="top-[16rem] sm:top-[20rem] md:top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white drop-shadow-lg rounded-md"></div>
      </div>
    </div>
  );
};
const OurValues = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative w-full overflow-hidden bg-[#0B1621] flex flex-col items-center justify-center py-[4rem] sm:py-[8rem]">
          <div className="absolute inset-0 w-full h-full bg-[#0B1621] z-20 [mask-image:radial-gradient(transparent,black)] pointer-events-none"></div>
          <Boxes />
          <h1
            className={cn(
              "md:text-[48px] text-[32px] font-black text-white relative z-20 w-full ml-[0%] sm:w-[90%] sm:ml-[5%] text-center"
            )}
          >
            We are not like this because we work here. We are here because we
            are like this.
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20 text-white md:text-[21px] text-[18px]">
            At SkillTease, we live by our POSITIVE Code that guides us through
            work and life:
          </p>
        </div>
        <div
          className="absolute h-[100px] left-0 bg-transparent top-[21rem] w-full z-50 grid gap-4 grid-cols-3 justify-center px-[1rem]
              sm:top-[26rem] sm:grid-cols-7
              md:top-[30rem]
              xl:top-[25rem]
              2xl:px-[15rem]"
        >
          {fertile.map((f) => {
            return (
              <div
                key={f.id}
                className={`bg-white cursor-pointer shadow-[0px_7px_8px_0px_#EAF3FC] rounded-xl flex items-center justify-center border
                ${f.letter === "F" && "hover:border-[#4CC0B9]"}
                ${f.letter === "E" && f.id === 2 && "hover:border-[#24B06C]"}
                ${f.letter === "R" && "hover:border-[#98CC63]"}
                ${f.letter === "T" && "hover:border-[#FED02C]"}
                ${f.letter === "I" && "hover:border-[#F6941C]"}
                ${f.letter === "L" && "hover:border-[#F14C51]"}
                ${f.letter === "E" && f.id === 7 && "hover:border-[#91268E]"}

                ${f.letter === "F" && "hover:shadow-[0px_7px_8px_0px_#4CC0B9]"}
                ${
                  f.letter === "E" &&
                  f.id === 2 &&
                  "hover:shadow-[0px_7px_8px_0px_#24B06C]"
                }
                ${f.letter === "R" && "hover:shadow-[0px_7px_8px_0px_#98CC63]"}
                ${f.letter === "T" && "hover:shadow-[0px_7px_8px_0px_#FED02C]"}
                ${f.letter === "I" && "hover:shadow-[0px_7px_8px_0px_#F6941C]"}
                ${f.letter === "L" && "hover:shadow-[0px_7px_8px_0px_#F14C51]"}
                ${
                  f.letter === "E" &&
                  f.id === 7 &&
                  "hover:shadow-[0px_7px_8px_0px_#91268E]"
                }
                `}
              >
                <p
                  className={`${f.letter === "F" && "text-[#4CC0B9]"}
                ${f.letter === "E" && f.id === 2 && "text-[#24B06C]"}
                ${f.letter === "R" && "text-[#98CC63]"}
                ${f.letter === "T" && "text-[#FED02C]"}
                ${f.letter === "I" && "text-[#F6941C]"}
                ${f.letter === "L" && "text-[#F14C51]"}
                ${f.letter === "E" && f.id === 7 && "text-[#91268E]"}
                text-[72px] font-black`}
                >
                  {f.letter}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Alphabets
        letter="F"
        paragraph="We treat fellow FXers like family & empower them to achieve their"
        span="Personal best."
        id={1}
      />
      <Alphabets
        letter="E"
        paragraph="We treat fellow FXers like family & empower them to achieve their"
        span="Personal best."
        id={2}
      />

      <Alphabets
        letter="R"
        paragraph="We treat fellow FXers like family & empower them to achieve their"
        span="Personal best."
        id={3}
      />
      <Alphabets
        letter="T"
        paragraph="We treat fellow FXers like family & empower them to achieve their"
        span="Personal best."
        id={4}
      />
      <Alphabets
        letter="I"
        paragraph="We treat fellow FXers like family & empower them to achieve their"
        span="Personal best."
        id={5}
      />
      <Alphabets
        letter="L"
        paragraph="We treat fellow FXers like family & empower them to achieve their"
        span="Personal best."
        id={6}
      />
      <Alphabets
        letter="E"
        paragraph="We treat fellow FXers like family & empower them to achieve their"
        span="Personal best."
        id={7}
      />
    </div>
  );
};

export default OurValues;
