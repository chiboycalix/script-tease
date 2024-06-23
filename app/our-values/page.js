import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const fertile = [
  {
    id: 1,
    letter: "F",
    color: "4CC0B9",
  },
  {
    id: 2,
    letter: "E",
    color: "24B06C",
  },
  {
    id: 3,
    letter: "R",
    color: "98CC63",
  },
  {
    id: 4,
    letter: "T",
    color: "FED02C",
  },
  {
    id: 5,
    letter: "I",
    color: "F6941C",
  },
  {
    id: 6,
    letter: "L",
    color: "F14C51",
  },
  {
    id: 7,
    letter: "E",
    color: "91268E",
  },
];

const Alphabets = ({ letter, paragraph, id }) => {
  return (
    <div
      className={`w-full ${letter === "F" && "bg-[#4CC0B9]"}
                ${letter === "E" && id === 2 && "bg-[#24B06C]"}
                ${letter === "R" && "bg-[#98CC63]"}
                ${letter === "T" && "bg-[#FED02C]"}
                ${letter === "I" && "bg-[#F6941C]"}
                ${letter === "L" && "bg-[#F14C51]"}
                ${
                  letter === "E" && id === 7 && "bg-[#91268E]"
                } bg-opacity-10 xl:px-[5rem] px-[1rem] lg:py-[5rem] py-[1rem]`}
    >
      <div className="flex justify-center items-center gap-[50px] sm:flex-row flex-col">
        <p
          className={`lg:text-[211px] sm:text-[180px] sm:leading-[180px] leading-[2px] text-[80px] font-black md:leading-[285px] ${
            letter === "F" && "text-[#4CC0B9]"
          }
                ${letter === "E" && id === 2 && "text-[#24B06C]"}
                ${letter === "R" && "text-[#98CC63]"}
                ${letter === "T" && "text-[#FED02C]"}
                ${letter === "I" && "text-[#F6941C]"}
                ${letter === "L" && "text-[#F14C51]"}
                ${letter === "E" && id === 7 && "text-[#91268E]"}`}
        >
          {letter}
        </p>
        <div className="w-full">
          <p className="lg:text-[48px] sm:text-[32px] text-[20px] font-black">
            {paragraph}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const Paragraph = ({ text }) => {
  return <p className="text-[21px] mb-[2rem]">{text}</p>;
};
const SectionTitle = ({ text }) => {
  return <p className="text-[32px] font-black mb-[1rem]">{text}</p>;
};
const OurValues = () => {
  return (
    <div className="w-full">
      <div className="relative mb-[15rem] sm:mb-[10rem]">
        <div className="relative w-full overflow-hidden bg-[#0B1621] flex flex-col items-center justify-center py-[4rem] sm:py-[8rem]">
          <div className="absolute inset-0 w-full h-full bg-[#0B1621] z-20 [mask-image:radial-gradient(transparent,black)] pointer-events-none"></div>
          {/* <Boxes /> */}
          <h1
            className={cn(
              "md:text-[48px] text-[32px] font-black text-white relative z-20 w-full ml-[0%] sm:w-[90%] sm:ml-[5%] text-center"
            )}
          >
            Cultivating a sustainable ecosystem FERTILE for transformative
            success.
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20 text-white md:text-[21px] text-[18px]">
            At SkillTribe, our FERTILE values—Focus, Enthusiasm, Responsibility,
            Trust, Innovation, Leadership, and Empowerment—define our commitment
            to nurturing talent and cultivating success in every project and
            partnership.
          </p>
        </div>
        <div
          className="absolute h-[100px] left-0 bg-transparent top-[21rem] w-full z-50 grid gap-4 grid-cols-3 justify-center px-[1rem]
              sm:top-[26rem] sm:grid-cols-7
              md:top-[30rem]
              xl:top-[25rem]
              2xl:px-[15rem]"
        >
          {fertile.map((f) => {
            return (
              <div
                key={f.id}
                className={`bg-white cursor-pointer shadow-[0px_7px_8px_0px_#EAF3FC] rounded-xl flex items-center justify-center border
                ${f.letter === "F" && "hover:border-[#4CC0B9]"}
                ${f.letter === "E" && f.id === 2 && "hover:border-[#24B06C]"}
                ${f.letter === "R" && "hover:border-[#98CC63]"}
                ${f.letter === "T" && "hover:border-[#FED02C]"}
                ${f.letter === "I" && "hover:border-[#F6941C]"}
                ${f.letter === "L" && "hover:border-[#F14C51]"}
                ${f.letter === "E" && f.id === 7 && "hover:border-[#91268E]"}

                ${f.letter === "F" && "hover:shadow-[0px_7px_8px_0px_#4CC0B9]"}
                ${
                  f.letter === "E" &&
                  f.id === 2 &&
                  "hover:shadow-[0px_7px_8px_0px_#24B06C]"
                }
                ${f.letter === "R" && "hover:shadow-[0px_7px_8px_0px_#98CC63]"}
                ${f.letter === "T" && "hover:shadow-[0px_7px_8px_0px_#FED02C]"}
                ${f.letter === "I" && "hover:shadow-[0px_7px_8px_0px_#F6941C]"}
                ${f.letter === "L" && "hover:shadow-[0px_7px_8px_0px_#F14C51]"}
                ${
                  f.letter === "E" &&
                  f.id === 7 &&
                  "hover:shadow-[0px_7px_8px_0px_#91268E]"
                }
                `}
              >
                <p
                  className={`${f.letter === "F" && "text-[#4CC0B9]"}
                ${f.letter === "E" && f.id === 2 && "text-[#24B06C]"}
                ${f.letter === "R" && "text-[#98CC63]"}
                ${f.letter === "T" && "text-[#FED02C]"}
                ${f.letter === "I" && "text-[#F6941C]"}
                ${f.letter === "L" && "text-[#F14C51]"}
                ${f.letter === "E" && f.id === 7 && "text-[#91268E]"}
                text-[72px] font-black`}
                >
                  {f.letter}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Alphabets letter="F" paragraph="- FOCUS" id={1} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem]">
          <div>
            <SectionTitle text="Section Title Left" />
            <Paragraph
              text="At SkillTribe, Focus is the bedrock of our internal culture, partnerships, and community impact.
Internally, we dedicate our full attention and resources to each program, project and initiative,
ensuring that our efforts align with our strategic goals. This dedication manifests in clear goals,
strategic planning, and meticulous execution, empowering our team to achieve their highest
potential."
            />
            <Paragraph
              text="By maintaining unwavering Focus, we foster a culture of precision and dedication,
where every task is approached with a strategic mindset, enabling us to deliver impactful and
meaningful outcomes."
            />
          </div>
          <div>
            <SectionTitle text="Section Title Right" />
            <Paragraph
              text="With our stakeholders, Focus translates to a commitment to understanding their needs and goals,
ensuring that our collaborative efforts are directed towards mutually beneficial outcomes. This
value helps us build strong, trust-based relationships, as our partners can rely on us to stay
dedicated and aligned with their objectives."
            />
            <Paragraph
              text="Focus in our community means creating targeted initiatives that address specific challenges and
opportunities. By concentrating our efforts on areas where we can make the most significant
impact, we ensure that our contributions are effective and sustainable. At SkillTribe, Focus is not
just a value; it's a guiding principle that shapes our actions and drives our mission to bridge the
gap between academic learning and real-world experience."
            />
          </div>
        </div>
      </div>

      <div>
        <Alphabets letter="E" paragraph="- Enthusiasm" id={2} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem]">
          <div>
            <SectionTitle text="Section Title Left" />
            <Paragraph
              text="Enthusiasm is the driving force behind SkillTribe's dynamic approach to every endeavor,
shaping our internal culture, stakeholder partnerships, and community impact. Internally,
Enthusiasm fosters a vibrant and positive workplace where passion fuels progress. Our team
approaches each project with excitement and a genuine desire to make a difference, creating an
environment where creativity and innovation thrive. This infectious energy motivates our team to
engage fully, pushing boundaries and achieving excellence"
            />
          </div>
          <div>
            <SectionTitle text="Section Title Right" />
            <Paragraph
              text="Enthusiasm leads initiatives with a spirited and positive outlook, inspiring others to join us in our
mission. In our partnerships with stakeholders, Enthusiasm translates to a proactive
understanding of collaboration style. We bring a good level of energy to every interaction,
demonstrating our commitment to mutual success. Our enthusiasm helps build strong, positive
relationships with partners, encouraging them to share in our vision and work together towards
common goals."
            />
            <Paragraph
              text="Our passionate engagement with community projects and programs not only drives impact but
also encourages widespread participation and support. By fostering an enthusiastic culture, we
create a ripple effect that spreads beyond our organization, energizing everyone we work with
and enhancing the overall effectiveness of our efforts. At SkillTribe, Enthusiasm is more than a
value; it's the heartbeat of our community."
            />
          </div>
        </div>
      </div>

      <div>
        <Alphabets letter="R" paragraph="- Responsibility" id={3} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem]">
          <div>
            <SectionTitle text="Section Title Left" />
            <Paragraph
              text="Responsibility at SkillTribe is a cornerstone of our internal culture, guiding our partnerships
with stakeholders and shaping our community impact. Internally we take ownership of our
actions and commitments, ensuring accountability at every level. We uphold true standards of
ethical conduct professionalism and professionalism, fostering a culture of integrity and trust.
Each team member is encouraged to act responsibly, understanding that their contributions
directly impact the success of our projects and the overall reputation of our organization."
            />
          </div>
          <div>
            <SectionTitle text="Section Title Right" />
            <Paragraph
              text="With our partners, Responsibility translates to reliable and dependable collaboration. We
prioritize transparent communication and follow through on our commitments, building trust and
credibility with our partners. Our responsible approach ensures that we meet and often exceed
stakeholder expectations, strengthening our relationships and fostering long-term collaboration."
            />
            <Paragraph
              text="For the community, Responsibility means acting as stewards of positive change. We are
committed to creating initiatives that address real needs and deliver sustainable benefits. Our
responsible engagement with community projects ensures that our impact is both meaningful and
lasting. By embracing Responsibility, we not only enhance our own credibility but also empower
our students and partners to act with confidence and dependability. At SkillTribe, Responsibility
is the cornerstone of our commitment to excellence and a better future."
            />
          </div>
        </div>
      </div>

      <div>
        <Alphabets letter="T" paragraph="- Trust" id={4} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem]">
          <div>
            <SectionTitle text="Section Title Left" />
            <Paragraph
              text="Trust is the foundation of all relationships at SkillTribe, integral to our internal culture,
stakeholder partnerships, and community impact. Internally, Trust means fostering an
environment where team members feel confident in each other's abilities and intentions. We
cultivate Trust through transparency, honesty, and consistency in our actions and
communications. This creates a supportive and collaborative workplace where everyone can
contribute their best, knowing they are backed by their colleagues."
            />
          </div>
          <div>
            <SectionTitle text="Section Title Right" />
            <Paragraph
              text="Trust is paramount in our partnerships. We build Trust by listening to your needs, understanding
your vision, exploring potentials, being reliable, ethical, and transparent in all our dealings. Our
stakeholders can count on us to uphold our commitments and act in their best interests. This
trust-based approach not only strengthens our partnerships but also enhances our ability to work
together effectively towards shared goals."
            />
            <Paragraph
              text="For the community, Trust means being a reliable and ethical partner in all our initiatives. We
engage with communities with respect and integrity, ensuring that our actions align with our
promises. By building Trust within the community, we foster stronger connections and more
effective collaborations, amplifying our impact. At SkillTribe, Trust is the bedrock of successful
partnerships and a key ingredient in achieving our shared goals, ensuring we make a lasting and
positive difference"
            />
          </div>
        </div>
      </div>
      <div>
        <Alphabets letter="I" paragraph="- Innovation" id={5} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem]">
          <div>
            <SectionTitle text="Section Title Left" />
            <Paragraph
              text="Innovation at SkillTribe drives our internal culture, stakeholder partnerships, and community
impact. Internally, Innovation means fostering a culture of creativity and forward-thinking. We
encourage our team to explore new ideas, experiment with cutting-edge technologies, and
challenge the status quo. This innovative mindset leads to continuous improvement and keeps us
at the forefront of industry trends, enabling us to deliver exceptional results."
            />
          </div>
          <div>
            <SectionTitle text="Section Title Right" />
            <Paragraph
              text="In our partnerships with stakeholders, Innovation translates to offering fresh perspectives and
novel solutions. We collaborate with partners to identify opportunities for improvement and
leverage innovative approaches to address their unique challenges. Our commitment to
Innovation ensures that we provide value-added services that meet the evolving needs of our
stakeholders, strengthening our relationships and driving mutual success."
            />
            <Paragraph
              text="Innovation for the community leads to implementing creative and effective solutions that
address pressing issues. We engage in projects that leverage the latest advancements and
innovative strategies to create sustainable impact. By fostering a culture of Innovation, we
empower our community to think outside the box and develop solutions that drive progress and
positive change. At SkillTribe, Innovation is the key to staying relevant and impactful in a
rapidly changing world, ensuring that we continue to make a meaningful difference."
            />
          </div>
        </div>
      </div>

      <div>
        <Alphabets letter="L" paragraph="- Leadership" id={6} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem]">
          <div>
            <SectionTitle text="Section Title Left" />
            <Paragraph
              text="Leadership at SkillTribe is about inspiring and guiding others to achieve their best, influencing
our internal culture, stakeholder partnerships, and community impact. Internally, Leadership
means setting a vision and direction that aligns with our mission. Our leaders act as mentors and
role models, fostering a culture of collaboration, empowerment, and continuous growth. They
provide guidance and support, encouraging team members to take initiative, make informed
decisions, and develop their potential."
            />
          </div>
          <div>
            <SectionTitle text="Section Title Right" />
            <Paragraph
              text="With your partnership we would like to drive projects forward and set high standards for
performance and ethics. We lead by example, demonstrating integrity, accountability, and
excellence in all our interactions. Our leadership approach builds trust and credibility with our
stakeholders, enabling us to forge strong, productive partnerships."
            />
            <Paragraph
              text="For the community, Leadership means being a catalyst for positive change. We take proactive
steps to address community needs, spearheading initiatives that create lasting benefits. Our
commitment to Leadership ensures that we not only contribute to immediate solutions but also
inspire others to join us in making a difference. At SkillTribe, Leadership is about guiding and
uplifting others, ensuring that we collectively achieve our goals and create a brighter future for
all."
            />
          </div>
        </div>
      </div>

      <div>
        <Alphabets letter="E" paragraph="- Excell" id={7} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem]">
          <div>
            <SectionTitle text="Section Title Left" />
            <Paragraph
              text="At SkillTribe, we strive to Excel in everything we do, shaping our internal culture, stakeholder
partnerships, and community impact. Internally, Excel means setting high standards and
continuously pushing ourselves to achieve the best possible outcomes. We foster a culture of
excellence where team members are encouraged to go above and beyond, leveraging their skills
and expertise to deliver outstanding results."
            />
          </div>
          <div>
            <SectionTitle text="Section Title Right" />
            <Paragraph
              text="In our partnerships with stakeholders, Excel translates to consistently exceeding expectations.
We are dedicated to delivering top-quality services and solutions that meet and surpass
stakeholder needs. Our focus on excellence strengthens our reputation and builds long-term trust
and loyalty with our partners, ensuring mutually beneficial and enduring collaborations."
            />
            <Paragraph
              text="For the community, Excel means leading initiatives that set benchmarks for quality and impact.
We are committed to implementing best practices and delivering exceptional results that make a
meaningful difference. By striving for excellence in all our community projects, we ensure that
our contributions are effective, sustainable, and transformative. At SkillTribe, Excel is not just a
value; it's a relentless pursuit of greatness that drives us to make a lasting and positive impact on
the world."
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurValues;
