"use client";
import { useRouter } from "next/navigation";
import Partners from "@/app/sections/partners";
import HomeTabs from "@/app/sections/tabs";
import HomeCarousel from "@/app/sections/carousel";
import HomePageBlogs from "@/app/sections/homePageBlogs";
import HomePageEvents from "@/app/sections/homePageEvents";
import Faqs from "@/app/sections/faqs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HorizontalScroll from "./sections/horizontalScroll";

const SectionHeeader = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center mb-[3rem]">
      <p className="text-[30px] md:text-[36px] lg:text-[56px] xl:text-[72px] font-black text-[#0B1720] tracking-tighter leading-[78px]">
        {title}
      </p>
      <p className="text-[24px] lg:text-[28px] xl:text-[32px] text-center font-semibold leading-10">
        {subTitle}
      </p>
    </div>
  );
};
export default function Home() {
  const router = useRouter();

  useGSAP(() => {
    gsap.to(".search-text", { opacity: 1 });
  }, []);
  return (
    <main>
      <HomeCarousel />
      <HorizontalScroll />
      <div className="px-[1rem] py-[5rem]">
        <SectionHeeader
          title="Our partners"
          subTitle="These are all our prtners"
        />
        <div className="px-[5rem]">
          <Partners />
        </div>
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white">
        <SectionHeeader
          title="Your search ends here."
          subTitle="Learn why businesses trust our digital marketing agency to power
            growth."
        />
        <HomeTabs />
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white">
        <SectionHeeader
          title="Our Blogs"
          subTitle="Learn more about our blogs"
        />

        <HomePageBlogs />
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white">
        <SectionHeeader
          title="FAQs"
          subTitle="Frequently asked Questions and Answers"
        />

        <Faqs />
        <div className="mt-[5rem] w-[20%] ml-[40%]">
          <button
            className="bg-primary hover:bg-opacity-90 text-white text-[21px] font-bold w-full py-[1rem] rounded cursor-pointer"
            onClick={() => router.push("/faqs", { scroll: false })}
          >
            More FAQs
          </button>
        </div>
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white">
        <SectionHeeader title="Events" subTitle=" These are upcoming events" />
        <HomePageEvents />
      </div>
    </main>
  );
}
