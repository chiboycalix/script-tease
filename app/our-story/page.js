"use client";
import React from "react";
import Title from "@/components/Title";
import Banner from "@/components/Banner";
import { SectionHeader } from "../page";

const Span = ({ text }) => {
  return <span className="text-primary-500 font-bold">{text}</span>;
};
const SectionWrapper = ({ children }) => {
  return (
    <div className="xl:px-[5rem] px-[1rem] pt-[1rem] lg:pt-[5rem] xl:pt-[10rem] flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

const OurStory = () => {
  return (
    <div className="w-full">
      <div className="bg-primary-950 lg:py-[5rem] py-[1rem]">
        <Banner
          title={
            <span className="text-white">
              Driving excellence through transformative practical experiences
            </span>
          }
          description={
            <span className="text-secondary">
             
            </span>
          }
          // buttonCaption="Learn More"
        />
      </div>

      <SectionWrapper>
        <p
          className={`text-[30px] text-center md:text-[36px] lg:text-[56px] xl:text-[72px] font-black text-black tracking-tighter sm:leading-[50px] md:leading-[78px] leading-[48px]`}
        >
          Where futures thrive in affinity with brilliance
        </p>

        <div className="w-[100%] ml-[0%] text-center lg:w-[94%] lg:ml-[3%]">
          <p className="text-left lg:text-center text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
            Welcome to SkillTribe, a pioneering platform dedicated to empowering
            students by bridging the gap between academic learning and
            real-world experience. We believe in the transformative power of
            hands-on projects and the importance of providing opportunities for
            students to earn while they learn. SkillTribe connects students with
            companies, universities, and governmental agencies, creating a
            dynamic ecosystem where they can apply their knowledge, gain
            practical skills, and prepare for successful careers.
          </p>
          <p className="text-left lg:text-center text-[21px] leading-[35px] text-[#869298] mt-[1rem]">
            Our mission is to foster collaboration and drive excellence in both
            academia and industry. We strive to create an environment where
            students can thrive, contributing to meaningful projects that
            enhance their learning experience and boost their employability. At
            SkillTribe, we are committed to supporting students in their
            educational journey and beyond, ensuring they have the tools,
            opportunities, and financial support to excel in their chosen
            fields.
          </p>
        </div>
      </SectionWrapper>
      {/* Our Story */}
      <div className="px-[1rem] xl:px-[5rem] w-full bg-primary-500 bg-opacity-5 flex flex-col justify-center items-center lg:mt-[5rem] py-[1rem] lg:py-[5rem]">
        <Title title="Our Story" color="black" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-left text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
              SkillTribe was born from the personal journey of our founder, who
              knows all too well the challenges of balancing work and university
              life.
            </p>
            <p className="text-left text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
              The founder's experience of juggling multiple jobs outside of
              academia during their university years highlights the common
              struggle faced by many students in balancing financial needs with
              academic pursuits. While these varied experiences undoubtedly
              developed valuable skills like resilience and time management,
              channeling more time into industry-specific practical endeavors
              could have further tailored their preparation for the professional
              challenges ahead, aligning more closely with SkillTribe's mission
              of bridging the gap between academic learning and real-world
              experience."
            </p>
            <p className="text-left text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
              This experience highlighted the need for a platform that could
              support students in similar situations, providing them with
              opportunities to gain practical experience and financial
              stability. After graduating, our founder quickly rose to a
              leadership position in one of America’s largest rolling stock
              organizations.
            </p>
          </div>
          <div>
            <p className="text-left text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
              This journey from a multitasking student to an industry leader
              underscored the value of practical experience and the importance
              of a supportive network. Inspired by this journey, our founder
              envisioned SkillTribe as a platform where students could access
              real-world projects, collaborate with industry professionals, and
              develop the skills needed for a successful future.
            </p>
            <p className="text-left text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
              At SkillTribe, we are dedicated to helping students achieve their
              fullest potential. By partnering with companies, universities, and
              governmental agencies, we create opportunities for students to
              work on impactful projects that enhance their learning and career
              prospects. Additionally, we offer layers of financial support to
              help students navigate their higher education journey. Our
              platform provides access to scholarships, grants, and paid project
              opportunities, ensuring that financial barriers do not hinder a
              student's academic and professional growth.
            </p>
            <p className="text-left text-[21px] leading-[35px] text-[#869298] mt-[2rem]">
              Join us in building a community where every student has the chance
              to shine and achieve greatness. Together, we can make a
              difference, one project at a time, while supporting students
              financially through their educational journey.
            </p>
          </div>
        </div>
      </div>

      {/* our approach */}
      <SectionWrapper>
        <SectionHeader
          title="Our Approach"
          subTitle="Executing Projects with a Focus on Delivering Quality Results"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-0 -mt-[3rem]">
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <p className="text-[21px] w-full mt-[2rem] text-[#222]">
              At our organization, excellence in project completion is ingrained
              in our approach, guided by the core values encapsulated in the
              value <Span text="F.E.R.T.I.L.E." />
            </p>
            <p className="text-[21px] w-full mt-[2rem] text-[#222]">
              We begin with a sharp <Span text="FOCUS" />, ensuring that every
              project is aligned with our strategic goals and client
              expectations. Our teams are not just enthusiastic (E) but driven
              by a passion for delivering exceptional results, consistently
              raising the bar for quality and innovation.
            </p>
            <p className="text-[21px] w-full mt-[2rem] text-[#222]">
              <Span text="RESPONSIBILITY" /> is at the heart of our work ethic,
              as we take ownership of tasks and commitments, ensuring timely and
              efficient project execution.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:text-left mb-[1rem] lg:mb-[0rem]">
            <p className="text-[21px] w-full mt-[2rem] text-[#222]">
              <Span text="TRUST" /> is paramount in our relationships, both
              internally and with our clients, fostering transparency,
              reliability, and mutual respect.
            </p>
            <p className="text-[21px] w-full mt-[2rem] text-[#222]">
              We continuously <Span text="INNOVATE" />, leveraging cutting-edge
              technologies and creative solutions to optimize processes and
              deliver value-added outcomes. Our LEADERSHIP sets the tone for
              excellence, guiding teams with vision, strategy, and mentorship.
            </p>
            <p className="text-[21px] w-full mt-[2rem] text-[#222]">
              Finally, we believe in <Span text="EMPOWERMENT" />, nurturing
              talent, fostering collaboration, and providing resources for
              growth, ensuring that each team member contributes to our
              collective success in achieving project excellence.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurStory;
