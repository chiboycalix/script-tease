"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import BlogOne from "@/assets/blog-1.png";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  BlogOne,
  BlogOne,
  BlogOne,
  BlogOne,
  BlogOne,
  BlogOne,
  BlogOne,
  BlogOne,
];
