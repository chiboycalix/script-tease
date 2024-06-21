"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Maquee() {
  return (
    <div className="rounded-md flex antialiased bg-primary-500 bg-opacity-20 text-primary-500 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "SkillTribe will give me real-world experience and career readiness. - Alex Nguyen, Engineering Student",
  },
  {
    title: "Hands-on projects through SkillTribe will be invaluable for my growth. - Business Administration Major",
  },
  {
    title: "SkillTribe will open doors to incredible job opportunities. - Daniel Martinez, Computer Science Graduate",
  },
  {
    title: "Learning with SkillTribe will be engaging and rewarding. - Jasmine Lee - Environmental Science Student",
  },
  {
    title: "SkillTribe projects will significantly enhance my professional skills. - Michael Carter, Marketing Student",
  },
  {
    title: "Brings fresh perspectives to our company's projects.",
  },
  {
    title: "Looking forward to exceptional collaboration between our team and SkillTribe students. - HR Manager",
  },
  {
    title: "Will be a great partner for top-talent with the current state of the job market - Talent Acquisition Lead",
  },
  {
    title: "Our company's innovation boosted by SkillTribe's student projects. - Head of R&D",
  },
  {
    title: "Enhances our workforce development and civic engagement efforts. - Regional Workforce Development Agency",
  },
  {
    title: "Fostered public-private partnerships, driving our local development initiatives. - Provincial Economic Development Officer",
  },
  {
    title: "Projects are addressing our community's challenges with innovative solutions. - City Council Member",
  },
];
