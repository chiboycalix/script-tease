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
    title: "🙌 “WebFX has been a game-changer for our web strategy.” | U.S. Healthcare Company",
  },
  {
    title: "💲 47% increase in year-over-year revenue | Industrial Supplier",
  },
  {
    title: "💲 👍 43% improvement in cost per lead | Industrial Supplier",
  },
  {
    title: "💲📈 34% increase in PPC conversion rate | Higher Education",
  },
  {
    title: "💲📝 11% increase in leads from blog content | Hospitality Company",
  },
  {
    title: "🍃 “WebFX has been a breath of fresh air.” | COO of Ecommerce Company",
  },
];
