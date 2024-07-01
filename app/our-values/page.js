import React from "react";
import Section from "./sections";
import { sectionContents } from "./contents";
import FertileSection from "./banner";

const OurValues = () => {
  const {
    focusLeftText,
    focusRightText,
    enthusiasmLeftText,
    enthusiasmRightText,
    responsibilityLeftText,
    responsibilityRightText,
    trustLeftText,
    trustRightText,
    innovationLeftText,
    innovationRightText,
    leadershipLeftText,
    leadershipRightText,
    excelLeftText,
    excelRightText,
  } = sectionContents;

const fertile = [
  { id: 1, letter: 'F', borderClass: 'hover:border-[#4CC0B9]', shadowClass: 'hover:shadow-[0px_7px_8px_0px_#4CC0B9]', textClass: 'text-[#4CC0B9]', bgColor: "bg-[#4CC0B9]"},
  { id: 2, letter: 'E', borderClass: 'hover:border-[#24B06C]', shadowClass: 'hover:shadow-[0px_7px_8px_0px_#24B06C]', textClass: 'text-[#24B06C]',bgColor: "bg-[#24B06C]" },
  { id: 3, letter: 'R', borderClass: 'hover:border-[#98CC63]', shadowClass: 'hover:shadow-[0px_7px_8px_0px_#98CC63]', textClass: 'text-[#98CC63]',bgColor: "bg-[#98CC63]" },
  { id: 4, letter: 'T', borderClass: 'hover:border-[#FED02C]', shadowClass: 'hover:shadow-[0px_7px_8px_0px_#FED02C]', textClass: 'text-[#FED02C]',bgColor: "bg-[#FED02C]" },
  { id: 5, letter: 'I', borderClass: 'hover:border-[#F6941C]', shadowClass: 'hover:shadow-[0px_7px_8px_0px_#F6941C]', textClass: 'text-[#F6941C]',bgColor: "bg-[#F6941C]" },
  { id: 6, letter: 'L', borderClass: 'hover:border-[#F14C51]', shadowClass: 'hover:shadow-[0px_7px_8px_0px_#F14C51]', textClass: 'text-[#F14C51]',bgColor: "bg-[#F14C51]" },
  { id: 7, letter: 'E', borderClass: 'hover:border-[#91268E]', shadowClass: 'hover:shadow-[0px_7px_8px_0px_#91268E]', textClass: 'text-[#91268E]',bgColor: "bg-[#91268E]" }
];
  return (
    <div className="w-full">
      <FertileSection fertile={fertile} />
      <Section
        title="Focus"
        // title="F"
        leftTitle="Section Title Left"
        leftText={focusLeftText}
        rightTitle="Section Title Right"
        rightText={focusRightText}
        bgColor="#4CC0B9"
        bgOpacity="10"
        textColor="#4CC0B9"
      />

      <Section
        title="Enthusiasm"
        // title="E"
        leftTitle="Section Title Left"
        leftText={enthusiasmLeftText}
        rightTitle="Section Title Right"
        rightText={enthusiasmRightText}
        bgColor="#24B06C"
        bgOpacity="10"
        textColor="#24B06C"
      />

      <Section
        title="Responsibility"
        // title="R"
        leftTitle="Section Title Left"
        leftText={responsibilityLeftText}
        rightTitle="Section Title Right"
        rightText={responsibilityRightText}
        bgColor="#98CC63"
        bgOpacity="10"
        textColor="#98CC63"
      />

      <Section
        title="Trust"
        // title="T"
        leftTitle="Section Title Left"
        leftText={trustLeftText}
        rightTitle="Section Title Right"
        rightText={trustRightText}
        bgColor="#FED02C"
        bgOpacity="10"
        textColor="#FED02C"
      />

      <Section
        title="Innovation"
        // title="I"
        leftTitle="Section Title Left"
        leftText={innovationLeftText}
        rightTitle="Section Title Right"
        rightText={innovationRightText}
        bgColor="#F6941C"
        bgOpacity="10"
        textColor="#F6941C"
      />

      <Section
        title="Leadership"
        // title="L"
        leftTitle="Section Title Left"
        leftText={leadershipLeftText}
        rightTitle="Section Title Right"
        rightText={leadershipRightText}
        bgColor="#F14C51"
        bgOpacity="10"
        textColor="#F14C51"
      />

      <Section
        title="Excel"
        //  title="E"
        leftTitle="Section Title Left"
        leftText={excelLeftText}
        rightTitle="Section Title Right"
        rightText={excelRightText}
        bgColor="#91268E"
        bgOpacity="10"
        textColor="#91268E"
      />
    </div>
  );
};

export default OurValues;
