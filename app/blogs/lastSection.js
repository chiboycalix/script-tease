import React from "react";
import BlogOne from "@/assets/blog-1.png";
import Image from "next/image";


const LastSectionBlog = () => {
  return (
    <div className="mt-[5rem]">
      <div className="flex justify-start items-center gap-4">
        <div className="w-[32px] h-[32px] rounded-full bg-[#207CE8]"></div>
        <div>
          <p className="text-[32px] font-extrabold">Last Section</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mt-[2rem]">
      <div className="rounded-md">
        <Image
          src={BlogOne}
          alt="BlogOne"
          className="rounded-md h-[200px]"
        />
        <div className="mt-[1rem] cursor-pointer">
          <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
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
          <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
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
          <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
          <p className="text-[21px] font-extrabold hover:text-[#207de9] mt-[0.5rem]">
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
          <p className="text-[18px] font-bold text-[#207de9]">WEB DESIGN</p>
          <p className="text-[21px] font-extrabold hover:text-[#207de9] cursor-pointer mt-[0.5rem]">
            40 Simple Minimalist Web Design Examples (Inspiration)
          </p>

          <p className="text-[#869298] text-[16px] mt-[1rem]">
            22 min read
          </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default LastSectionBlog;
