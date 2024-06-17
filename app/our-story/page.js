"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";


const OurStory = () => {
  useGSAP(() => {
    gsap.to(".title", { opacity: 1, duration: 1, stagger:0.25 });
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.box', {
      scrollTrigger: '.box', // start animation when ".box" enters the viewport
      opacity: 1,
      delay: 1
  });

  }, []);



  return (
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 bg-[#1D2C47] px-[1.5rem] xl:px-[5rem] py-[10rem]">
          <div className="">
            <p className="text-white text-[72px] font-black leading-[85px] title opacity-0">
              Digital Marketing That Drives <br />
              Result
            </p>

            <p className="text-[#859396] mt-4 text-[21px] font-normal leading-[35px] w-[75%] title opacity-0">
              With proprietary software powered by AI and billions of data
              points from decades of industry-leading expertise, WebFX creates
              data-driven strategies that drive revenue, create jobs, and grow
              businesses.
            </p>
            <button className="text-white bg-primary px-[80px] py-[20px] rounded text-[21px] font-semibold hover:bg-opacity-50 mt-[60px]">
              Learn More
            </button>
          </div>
          <div></div>
        </div>
        <div className="xl:px-[5rem] py-[10rem]">
          <p className="text-[72px] font-black leading-[75px] text-center text-[#374144]">
            More than just a place to work
          </p>
          <div className="w-[94%] ml-[3%] text-center">
            <p className="text-center text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
              At WebFX, our clients are always our top priority — but we firmly
              believe in creating an environment that’s more than just a place
              to work. Building a positive company culture has always been
              important to us, and as a result, we’ve been named the #1 Best
              Place to Work in PA six years in a row.
            </p>
            <p className="text-center text-[21px] leading-[35px] text-[#869298] mt-[1rem]">
              And that’s not just because of the perks like our office in a
              renovated mansion, company bikes and kayaks, weekly yoga sessions,
              and in-house barista, either — though we know those certainly
              don’t hurt. But what truly sets WebFX apart is our dedication to
              positivity as the core of our company values. We strive to replace
              complaints with solutions, use challenges to our benefit, and
              bring energy and creativity to every project we take on.
            </p>
            <p className="text-center text-[21px] leading-[35px] text-[#869298] mt-[1rem]">
              We also believe in the importance of improving the lives of
              others, which is why we established #FXBuilds in 2014.
            </p>
            <p className="text-center text-[21px] leading-[35px] text-[#869298] mt-[1rem]">
              For every high-impact task we complete (like launching a new
              client website or earning a link from a top-tier publication),
              WebFX adds to the #FXBuilds fund, which we use to support
              organizations that provide education, shelter, and clean drinking
              water to people around the world. So far, we’ve impacted more than
              6,500 lives.
            </p>
            <p className="text-center text-[21px] leading-[35px] text-[#869298] mt-[1rem]">
              In 2021, we also committed to cleaning 275+ football fields of
              plastic from waterways yearly and protect 100 acres of forest in
              Guatemala’s coast.
            </p>
          </div>
        </div>

        {/* our approach */}
        <div className="bg-white px-[1.5rem] xl:px-[5rem] opacity-0 box">
          <p className="text-[72px] font-black leading-[75px] text-center text-[#374144]">
            Our Approach
          </p>
          <div className="grid grid-cols-2 gap-4 mt-[5rem]">
            <div>
              <p className="text-[#869298] font-bold">
                PARTNER WITH A DEDICATED AGENCY YOU CAN TRUST
              </p>
              <p className="text-[48px] font-black leading-[56px] mt-[1rem]">
                <span className="text-primary">Nationally-recognized</span>{" "}
                awards & partnerships
              </p>
              <p className="text-[21px] w-[86%] mt-[2rem] text-[#222]">
                Our driving goal — to create new opportunities and revenue for
                clients — has earned us national recognition from respected
                organizations in the design, marketing, and business sectors.
              </p>
              <p className="text-[21px] w-[86%] mt-[2rem] text-[#222]">
                Over the years, WebFX has won dozens of awards for achievements
                in entrepreneurship, historical preservation, search engine
                optimization, web design, and more.
              </p>
            </div>

            <div data-scroll data-scroll-speed="0.3">
              <p className="text-[#869298] font-bold">
                PARTNER WITH A DEDICATED AGENCY YOU CAN TRUST
              </p>
              <p className="text-[48px] font-black leading-[56px] mt-[1rem]">
                <span className="text-primary">Nationally-recognized</span>{" "}
                awards & partnerships
              </p>
              <p className="text-[21px] w-[86%] mt-[2rem] text-[#222]">
                Our driving goal — to create new opportunities and revenue for
                clients — has earned us national recognition from respected
                organizations in the design, marketing, and business sectors.
              </p>
              <p className="text-[21px] w-[86%] mt-[2rem] text-[#222]">
                Over the years, WebFX has won dozens of awards for achievements
                in entrepreneurship, historical preservation, search engine
                optimization, web design, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OurStory;
