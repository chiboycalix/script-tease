"use client";
import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "../../components/material/MTailwind";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faqs = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Faq One</AccordionHeader>
        <AccordionBody>Faq One</AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>Faq Two</AccordionHeader>
        <AccordionBody>Faq Two</AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Faq Three
        </AccordionHeader>
        <AccordionBody>Faq Three</AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Faq Four
        </AccordionHeader>
        <AccordionBody>Faq Four</AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Faq Five
        </AccordionHeader>
        <AccordionBody>Faq Five</AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          Faq Six
        </AccordionHeader>
        <AccordionBody>Faq Six</AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)}>
          Faq Seven
        </AccordionHeader>
        <AccordionBody>Faq Seven</AccordionBody>
      </Accordion>
    </>
  );
};
export default Faqs;
