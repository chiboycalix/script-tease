import React from 'react'
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";
import GovernmentBlog from '../sections/governmentBlogs';

const GovernmentOrganisation = () => {
  return (
    <div className="mt-[5rem]">
    <div className="flex justify-start items-center gap-4 mb-[2rem]">
      <div className="w-[32px] h-[32px] rounded-full bg-primary"></div>
      <div>
        <p className="text-[32px] font-extrabold">
          Government Organisation
        </p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <GovernmentBlog />
      <div className="rounded-md bg-[#EFF6FE]">
        <Image
          src={BlogOne}
          alt="BlogOne"
          className="h-[400px] rounded-t-md"
        />
        <div className="mt-[1rem] cursor-pointer p-[2rem]">
          <p className="text-[18px] font-bold text-primary">WEB DESIGN</p>
          <p className="text-[32px] font-extrabold hover:text-primary cursor-pointer mt-[0.5rem]">
            40 Simple Minimalist Web Design Examples (Inspiration)
          </p>
          <p className="text-[18px] mt-[1rem]">
            Keep reading to learn more about the meaning of SEO services,
            including how much they cost, what they should include, and how
            to find the best type of SEO service.
          </p>

          <p className="text-[#869298] text-[16px] mt-[2rem]">
            22 min read
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GovernmentOrganisation