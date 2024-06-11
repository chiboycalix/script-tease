"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "../../components/material/MTailwind";

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
  const pathname = usePathname();
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is SkillTribe?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[16px] font-normal">
            SkillTribe is a platform that connects students, companies,
            universities, and government agencies to collaborate on hands-on
            projects, providing students with practical experience and earning
            opportunities while driving academic and industry excellence.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How do I sign up for SkillTribe?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[16px] font-normal">
            To become a partner, visit our website, click on the "Sign Up/Become
            a partner" button, and follow the instructions to create your
            account. You can sign up as a student, company, university, or
            government agency.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What types of projects are available on SkillTribe?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[16px] font-normal">
            SkillTribe offers a wide range of projects across various
            industries, including technology, engineering, business, media,
            sustainability and more. These projects are designed to provide
            real-world experience and practical skills.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          How do students earn money on SkillTribe?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[16px] font-normal">
            Students earn money by participating in and completing projects
            posted by companies, universities, and government agencies. Each
            project has a specified compensation that is paid upon successful
            completion.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          How can companies benefit from SkillTribe?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[16px] font-normal">
            Companies become a part of the thriving ecosystem of SkillTribe
            while accessing pool of talented students, collaborate on innovative
            projects, enhance their corporate social responsibility, and stay
            competitive by fostering the next generation of industry leaders.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          What are the benefits for universities?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[16px] font-normal">
            Universities can enhance their curriculum with real-world projects,
            collaborate with leading organizations, provide students with
            hands-on experience, and build a reputation as a forward- thinking
            institution.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)}>
          How does SkillTribe ensure the quality of projects and participants?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[16px] font-normal">
            SkillTribe has a team assigned to the quality if each project. Our
            focused remains on the quality expectations of the customer with
            assigned student already trained to handle projects from its
            conception to completion.
          </p>
        </AccordionBody>
      </Accordion>
      {pathname === "/faqs" && (
        <>
          <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(8)}>
              Can international students participate in SkillTribe projects?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Yes, SkillTribe is open to students of university partners
                around Canada. This is However, some projects may have specific
                requirements or restrictions based on the location of the
                participating organizations.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(9)}>
              What support does SkillTribe offer to participants?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                SkillTribe provides dedicated teams/resources, mentorship, and
                support to help participants succeed in their projects. We also
                offer customer support to address any issues or concerns.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(10)}>
              How do I find suitable projects on SkillTribe?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Once signed up, you can browse projects based on your interests,
                skills, and availability. Our platform also offers personalized
                recommendations to help you find the most suitable projects.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(11)}>
              Is there a cost to join SkillTribe?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Signing up for SkillTribe is free for students. Companies and
                universities may have a subscription fee based on the level of
                access and services required.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(12)}>
              How do I post a project on SkillTribe?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                To post a project, log in to your account, navigate to the
                "Upload Project" section, and fill out the project details,
                including objectives, requirements, timeline, amongst others.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(13)}>
              What happens if a project is not completed on time?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                If a project is not completed on time, the parties involved can
                negotiate an extension or resolution. SkillTribe's support team
                can assist in mediating if necessary to ensure a fair outcome.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 14} icon={<Icon id={14} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(14)}>
              Can I work on multiple projects at once?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Yes, students are allowed to work on a maximum of 2 projects
                simultaneously, provided they can manage their time effectively
                and meet all project deadlines.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 15} icon={<Icon id={15} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(15)}>
              How are payments processed on SkillTribe?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Payments are processed through our secure platform. Upon project
                completion and approval, funds are transferred to the
                participant’s SkillTribe account, which can then be withdrawn to
                their bank account.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 16} icon={<Icon id={16} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(16)}>
              What kind of support is available for companies?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Companies receive dedicated support for project postings, talent
                matching, and collaboration management. SkillTribe also offers
                guidance on project scope and deliverables to ensure successful
                outcomes.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 17} icon={<Icon id={17} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(17)}>
              Are there any eligibility criteria for students?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Students must be enrolled in an accredited educational
                institution and meet the specific requirements of the projects
                they apply for. Some projects may have additional criteria based
                on skills or experience.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 18} icon={<Icon id={18} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(18)}>
              How do universities collaborate with SkillTribe?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Universities can partner with SkillTribe by integrating the
                platform into their curriculum, offering credit for project
                participation, and collaborating on research and development
                initiatives.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 19} icon={<Icon id={19} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(19)}>
              What types of government agencies can join SkillTribe?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Local, state, and federal government agencies can join
                SkillTribe to collaborate on projects, engage with academic and
                industry partners, and support student development.
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 20} icon={<Icon id={20} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(20)}>
              How does SkillTribe handle intellectual property (IP) rights?
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[16px] font-normal">
                Intellectual property rights usually remain with organization
                posting project, this will be typically agreed upon between the
                participating parties before the project starts. SkillTribe
                provides guidelines to ensure that IP rights are respected and
                clearly defined.
              </p>
            </AccordionBody>
          </Accordion>
        </>
      )}
    </>
  );
};
export default Faqs;
