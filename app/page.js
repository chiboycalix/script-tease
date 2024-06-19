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
import Button from "@/components/Button";
import Title from "@/components/Title";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center mb-[3rem]">
     <Title title={title}/>
      <p className="text-[24px] lg:text-[28px] xl:text-[32px] text-center font-semibold leading-10">
        {subTitle}
      </p>
    </div>
  );
};
const SectionWrapper = ({ children }) => {
  return (
    <div className="px-[1.5rem] xl:px-[5rem] py-[1rem] xl:py-[5rem] bg-white">
      {children}
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
        <SectionHeader
          title="Our partners"
          subTitle="These are all our prtners"
        />
        <div className="px-[5rem]">
          <Partners />
        </div>
      </div>
      <SectionWrapper>
        <SectionHeader
          title="Your search ends here."
          subTitle="Learn why businesses trust our digital marketing agency to power
            growth."
        />
        <HomeTabs />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          title="Our Blogs"
          subTitle="Learn more about our blogs"
        />
        <HomePageBlogs />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          title="FAQs"
          subTitle="Frequently asked Questions and Answers"
        />
        <Faqs />
        <div className="mt-[5rem] w-full lg:w-[40%] lg:ml-[30%]">
          <Button
            caption="More FAQs"
            onClick={() => router.push("/faqs", { scroll: false })}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Events" subTitle=" These are upcoming events" />
        <HomePageEvents />
      </SectionWrapper>
    </main>
  );
}
