import React from 'react'
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -3 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const MobileNav = ({ showMenu }) => {
  return (
    <motion.div
    className="absolute top-[9.5rem] xxs:top-[8rem] left-0 bg-white w-screen lg:hidden px-[2rem]"
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
  )
}

export default MobileNav