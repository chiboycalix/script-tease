"use client";
import * as React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "../../components/material/MTailwind";

const DescriptionWrapper = ({ children }) => {
  return (
    <div className="w-full grid gap-5 lg:grid-cols-2 grid-cols-1">
      {children}
    </div>
  );
};
const DescriptionContent = ({ children }) => {
  return (
    <div className="basis-1/2 p-[1rem] rounded-xl border-[1px] border-black border-opacity-40">{children}</div>
  );
};

const HomeTabs = () => {
  const [activeTab, setActiveTab] = React.useState("University");
  const data = [
    {
      label: "University",
      value: "University",
      desc: (
        <DescriptionWrapper>
          <DescriptionContent>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              {" "}
              By partnering with us, your university will gain access to
              innovative projects that provide students with hands-on
              experience, bridging the gap between education and real-world
              application. Collaborate with leading organizations, enhance your
              curriculum, and offer your students invaluable opportunities to
              earn while they learn.
            </p>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Industry Collaboration:{" "}
              </span>
              Build partnerships with leading companies and government agencies
              for research and development.
            </p>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Student Opportunities:{" "}
              </span>
              Provide students with hands-on experience, internships, and
              earning opportunities.
            </p>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Innovative Learning:{" "}
              </span>
              Access cutting-edge resources and tools that foster innovative
              teaching methods.
            </p>
          </DescriptionContent>
          <DescriptionContent>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Reputation Building:{" "}
              </span>
              Boost the university’s reputation as a forward-thinking
              institution dedicated to student success and industry engagement.
            </p>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Funding Opportunities:{" "}
              </span>
              Gain access to potential funding from partnerships with companies
              and government agencies.
            </p>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Research Support:{" "}
              </span>
              Collaborate on research projects that can lead to significant
              academic contributions and advancements.
            </p>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Career Readiness:{" "}
              </span>
              Equip students with the skills and experience needed to excel in
              their future careers.
            </p>
            <p className="text-[24px] text-[#353535] font-medium leading-[49px]">
              <span className="text-primary font-extrabold">
                Community Impact:{" "}
              </span>
              Play a pivotal role in driving societal progress by preparing the
              next generation of leaders and innovators.
            </p>
          </DescriptionContent>
        </DescriptionWrapper>
      ),
    },
    {
      label: "Organisation",
      value: "organisation",
      desc: (
        <DescriptionWrapper>
          <DescriptionContent>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              {" "}
              Collaborate with top universities and government bodies to solve
              real-world challenges while fostering the next generation of
              industry leaders. Enhance your corporate social responsibility,
              boost your brand’s reputation, and stay ahead in the competitive
              market. Sign on as a partner today and unlock the potential of
              tomorrow's workforce with SkillTribe!
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Access to Talent:{" "}
              </span>
              Tap into a diverse pool of skilled students ready to contribute to
              your projects.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Enhanced CSR:{" "}
              </span>
              Demonstrate corporate social responsibility by investing in
              education and supporting the professional growth of young talents.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Collaborative Opportunities:{" "}
              </span>{" "}
              Partner with universities and government agencies on research and
              development initiatives.
            </p>
          </DescriptionContent>
          <DescriptionContent>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Cost-Effective Solutions:{" "}
              </span>
              Leverage student involvement for cost-effective project
              completion. Brand Visibility: Increase your organization’s
              visibility and reputation among academic and professional
              communities.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Future Workforce Development:{" "}
              </span>
              Shape the skills and knowledge of potential future employees,
              ensuring they meet industry standards.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Research Advancements:{" "}
              </span>
              Collaborate on cutting-edge research projects that can lead to
              significant industry advancements.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Continuous Learning:{" "}
              </span>
              Stay updated with the latest academic and industry trends through
              ongoing collaborations and interactions.
            </p>
          </DescriptionContent>
        </DescriptionWrapper>
      ),
    },
    {
      label: "Student",
      value: "student",
      desc: (
        <DescriptionWrapper>
          <DescriptionContent>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              As a partner, you’ll collaborate on impactful projects, enhance
              your skills, and build a professional network that sets you apart
              in the job market. Gain practical knowledge, earn while you learn,
              and contribute to meaningful industry advancements. With
              SkillTribe, you’re not just a student; you’re an active
              participant in shaping the future.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Hands-On Experience:{" "}
              </span>
              Work on real-world projects that provide practical, hands-on
              experience. Earning Opportunities: Earn money while gaining
              valuable work experience.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Skill Enhancement:{" "}
              </span>
              Skill Enhancement: Develop and refine skills that are highly
              sought after by employers. Professional Networking: Build
              connections with industry professionals, companies, universities,
            </p>
          </DescriptionContent>
          <DescriptionContent>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              and government agencies.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Career Readiness:{" "}
              </span>
              Career Readiness: Gain a competitive edge in the job market with
              relevant experience and skills. Collaborative Projects:
              Participate in collaborative projects that bridge the gap between
              academia and industry.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">Mentorship: </span>
              Mentorship: Receive guidance and mentorship from experienced
              professionals. Portfolio Building: Create a portfolio of completed
              projects to showcase to future employers.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Research Opportunities:{" "}
              </span>
              Research Opportunities: Engage in research projects that can
              contribute to academic and industry advancements.
            </p>
            <p className="text-2xl text-[#353535] font-medium leading-[50px]">
              <span className="text-primary font-extrabold">
                Personal Growth:{" "}
              </span>
              Personal Growth: Enhance your problem-solving, teamwork, and
              leadership abilities.
            </p>
          </DescriptionContent>
        </DescriptionWrapper>
      ),
    },
  ];

  return (
    <Tabs value={activeTab} orientation="horizontal">
      <TabsHeader
        className="bg-transparent h-[300px] rounded flex flex-col sm:flex-row sm:h-[128px]"
        indicatorProps={{
          className: "bg-primary bg-opacity-10 shadow-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`font-black text-[24px] lg:text-[28px] ${
              activeTab === value ? "text-primary" : ""
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        className="mt-10"
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-2">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default HomeTabs;
