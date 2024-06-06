import React from 'react'
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";

const GovernmentOrganisation = () => {
  return (
    <div className="mt-[5rem]">
    <div className="flex justify-start items-center gap-4 mb-[2rem]">
      <div className="w-[32px] h-[32px] rounded-full bg-[#207CE8]"></div>
      <div>
        <p className="text-[32px] font-extrabold">
          Government Organisation
        </p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-md">
          <Image
            src={BlogOne}
            alt="BlogOne"
            className="rounded-md h-[200px]"
          />
          <div className="mt-[1rem] cursor-pointer">
            <p className="text-[18px] font-bold text-[#207de9]">
              WEB DESIGN
            </p>
            <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
              40 Simple Minimalist Web Design Examples (Inspiration)
            </p>

            <p className="text-[#869298] text-[16px] mt-[1rem]">
              22 min read
            </p>
          </div>
        </div>
        <div className="rounded-md">
          <Image
            src={BlogOne}
            alt="BlogOne"
            className="rounded-md h-[200px]"
          />
          <div className="mt-[1rem] cursor-pointer">
            <p className="text-[18px] font-bold text-[#207de9]">
              WEB DESIGN
            </p>
            <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
              40 Simple Minimalist Web Design Examples (Inspiration)
            </p>

            <p className="text-[#869298] text-[16px] mt-[1rem]">
              22 min read
            </p>
          </div>
        </div>
        <div className="rounded-md">
          <Image
            src={BlogOne}
            alt="BlogOne"
            className="rounded-md h-[200px]"
          />
          <div className="mt-[1rem] cursor-pointer">
            <p className="text-[18px] font-bold text-[#207de9]">
              WEB DESIGN
            </p>
            <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
              40 Simple Minimalist Web Design Examples (Inspiration)
            </p>

            <p className="text-[#869298] text-[16px] mt-[1rem]">
              22 min read
            </p>
          </div>
        </div>
        <div className="rounded-md">
          <Image
            src={BlogOne}
            alt="BlogOne"
            className="rounded-md h-[200px]"
          />
          <div className="mt-[1rem] cursor-pointer">
            <p className="text-[18px] font-bold text-[#207de9]">
              WEB DESIGN
            </p>
            <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
              40 Simple Minimalist Web Design Examples (Inspiration)
            </p>

            <p className="text-[#869298] text-[16px] mt-[1rem]">
              22 min read
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-[#EFF6FE]">
        <Image
          src={BlogOne}
          alt="BlogOne"
          className="h-[400px] rounded-t-md"
        />
        <div className="mt-[1rem] cursor-pointer p-[2rem]">
          <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
          <p className="text-[32px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
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