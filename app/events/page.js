"use client";
import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
const events = [
  {
    id: 1,
    title: "Montreal Onboarding Fair",
    date: "20/06/2024",
    location: "Eaton Center",
    subDescription:
    "A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features a few tried-and-true principles: focus on what’s most valuable to customers, and ship things before they’re perfect. A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features",
    img: BlogOne,
  },
  {
    id: 2,
    title: "Montreal Onboarding Fair",
    date: "20/06/2024",
    location: "Eaton Center",
    subDescription:
      "A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features a few tried-and-true principles: focus on what’s most valuable to customers, and ship things before they’re perfect. A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features",
    img: BlogOne,
  },
  {
    id: 3,
    title: "Montreal Onboarding Fair",
    date: "20/06/2024",
    location: "Eaton Center",
    subDescription:
      "A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features a few tried-and-true principles: focus on what’s most valuable to customers, and ship things before they’re perfect. A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features",
    img: BlogOne,
  },
  {
    id: 4,
    title: "Montreal Onboarding Fair",
    date: "20/06/2024",
    location: "Eaton Center",
    subDescription:
      "A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features a few tried-and-true principles: focus on what’s most valuable to customers, and ship things before they’re perfect. A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features",
    img: BlogOne,
  },
  {
    id: 5,
    title: "Montreal Onboarding Fair",
    date: "20/06/2024",
    location: "Eaton Center",
    subDescription:
      "A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features a few tried-and-true principles: focus on what’s most valuable to customers, and ship things before they’re perfect. A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features",
    img: BlogOne,
  },
  {
    id: 6,
    title: "Montreal Onboarding Fair",
    date: "20/06/2024",
    location: "Eaton Center",
    subDescription:
      "A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features a few tried-and-true principles: focus on what’s most valuable to customers, and ship things before they’re perfect. A few years ago, I came across a Medium story on the art of “ruthless prioritization.” It’s written in the context of deciding what to build next at a tech company (in this case, Shopify), and features",
    img: BlogOne,
  },
];
const Events = () => {
  return (
    <div className="w-full pt-[5rem] px-[5rem]">
      {events.map((event) => {
        return (
          <div className="grid grid-cols-2 gap-[2rem] mb-[8rem]" key={event.id}>
            <div>
              <Image src={event.img} className="h-96"/>
            </div>
            <div>
              <p className="text-[32px] font-black text-[#207de9] mb-[1rem]">
                {event.title}
              </p>
              <p className="text-[21px] font-bold text-[#000] mb-[1rem]">
                {event.date} - {event.location}
              </p>
              <p className="text-[18px]">{event.subDescription}</p>

              <button className="bg-[#207CE8] text-white text-[21px] font-bold w-[50%] py-[1rem] rounded cursor-pointer mt-[1rem]">
                Get Ticket
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
