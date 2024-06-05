import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import React from "react";

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
const OurValues = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative w-full overflow-hidden bg-[#0B1621] flex flex-col items-center justify-center py-[8rem]">
          <div className="absolute inset-0 w-full h-full bg-[#0B1621] z-20 [mask-image:radial-gradient(transparent,black)] pointer-events-none"></div>
          <Boxes />
          <h1
            className={cn(
              "text-[48px] font-black text-white relative z-20 w-[90%] ml-[5%] text-center"
            )}
          >
            We are not like this because we work here. We are here because we
            are like this.
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20 text-white text-[21px]">
            At SkillTease, we live by our POSITIVE Code that guides us through
            work and life:
          </p>
        </div>
        <div className="absolute left-0 h-[100px] bg-transparent top-[25rem] w-full z-50 grid gap-4 grid-cols-7 justify-center px-[20rem]">
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
      <div className="h-[900px] relative">
        <div className="w-full bg-[#4CC0B9] bg-opacity-10 mt-[15rem] pt-[3rem] pb-[15rem]">
          <div className="flex justify-center items-center gap-[50px]">
            <p className="text-[211px] font-black leading-[285px] text-[#4CC0B9]">
              F
            </p>
            <div className="text-[48px] font-black w-[70%]">
              <p>
                We treat fellow FXers like family & empower them to achieve
                their <span className="text-[#4CC0B9]">Personal best.</span>
              </p>
            </div>
          </div>
          <div className="top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white shadow-[2px_14px_8px_0px_#EEF8F8]"></div>
        </div>
      </div>

      <div className="h-[900px] relative">
        <div className="w-full bg-[#24B06C] bg-opacity-10 mt-[15rem] pt-[3rem] pb-[15rem]">
          <div className="flex justify-center items-center gap-[50px]">
            <p className="text-[211px] font-black leading-[285px] text-[#24B06C]">
              E
            </p>
            <div className="text-[48px] font-black w-[70%]">
              <p>
                We treat fellow FXers like family & empower them to achieve
                their <span className="text-[#24B06C]">Personal best.</span>
              </p>
            </div>
          </div>
          <div className="top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white shadow-[2px_14px_8px_0px_#ECF7F0]"></div>
        </div>
      </div>

      <div className="h-[900px] relative">
        <div className="w-full bg-[#98CC63] bg-opacity-10 mt-[15rem] pt-[3rem] pb-[15rem]">
          <div className="flex justify-center items-center gap-[50px]">
            <p className="text-[211px] font-black leading-[285px] text-[#98CC63]">
              R
            </p>
            <div className="text-[48px] font-black w-[70%]">
              <p>
                We treat fellow FXers like family & empower them to achieve
                their <span className="text-[#98CC63]">Personal best.</span>
              </p>
            </div>
          </div>
          <div className="top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white shadow-[2px_14px_8px_0px_#F5FAEF]"></div>
        </div>
      </div>

      <div className="h-[900px] relative">
        <div className="w-full bg-[#FED02C] bg-opacity-10 mt-[15rem] pt-[3rem] pb-[15rem]">
          <div className="flex justify-center items-center gap-[50px]">
            <p className="text-[211px] font-black leading-[285px] text-[#FED02C]">
              T
            </p>
            <div className="text-[48px] font-black w-[70%]">
              <p>
                We treat fellow FXers like family & empower them to achieve
                their <span className="text-[#FED02C]">Personal best.</span>
              </p>
            </div>
          </div>
          <div className="top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white shadow-[2px_14px_8px_0px_#FFFAEB]"></div>
        </div>
      </div>

      <div className="h-[900px] relative">
        <div className="w-full bg-[#F6941C] bg-opacity-10 mt-[15rem] pt-[3rem] pb-[15rem]">
          <div className="flex justify-center items-center gap-[50px]">
            <p className="text-[211px] font-black leading-[285px] text-[#F6941C]">
              I
            </p>
            <div className="text-[48px] font-black w-[70%]">
              <p>
                We treat fellow FXers like family & empower them to achieve
                their <span className="text-[#F6941C]">Personal best.</span>
              </p>
            </div>
          </div>
          <div className="top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white shadow-[2px_14px_8px_0px_#FFF4EA]"></div>
        </div>
      </div>

      <div className="h-[900px] relative">
        <div className="w-full bg-[#F14C51] bg-opacity-10 mt-[15rem] pt-[3rem] pb-[15rem]">
          <div className="flex justify-center items-center gap-[50px]">
            <p className="text-[211px] font-black leading-[285px] text-[#F14C51]">
              L
            </p>
            <div className="text-[48px] font-black w-[70%]">
              <p>
                We treat fellow FXers like family & empower them to achieve
                their <span className="text-[#F14C51]">Personal best.</span>
              </p>
            </div>
          </div>
          <div className="top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white shadow-[2px_14px_8px_0px_#FFEDED]"></div>
        </div>
      </div>

      <div className="h-[900px] relative">
        <div className="w-full bg-[#91268E] bg-opacity-10 mt-[15rem] pt-[3rem] pb-[15rem]">
          <div className="flex justify-center items-center gap-[50px]">
            <p className="text-[211px] font-black leading-[285px] text-[#91268E]">
              E
            </p>
            <div className="text-[48px] font-black w-[70%]">
              <p>
                We treat fellow FXers like family & empower them to achieve
                their <span className="text-[#91268E]">Personal best.</span>
              </p>
            </div>
          </div>
          <div className="top-[25rem] absolute h-[400px] w-[90%] ml-[5%] bg-white shadow-[2px_14px_8px_0px_#F5E9F3]"></div>
        </div>
      </div>

    </div>
  );
};

export default OurValues;
