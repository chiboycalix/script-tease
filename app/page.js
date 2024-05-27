import HomeSlider from "@/app/sections/partners";
import HomeTabs from "@/app/sections/tabs";
import HomeCarousel from "@/app/sections/carousel";
import HomePageBlogs from "@/app/sections/homePageBlogs";
import HomePageEvents from "@/app/sections/homePageEvents";
import Faqs from "@/app/sections/faqs";

export default function Home() {
  return (
    <main>
      <HomeCarousel />
      <div className="bg-white">
        <div className="px-[1.5rem] xl:px-[5rem] py-[2rem] bg-[#B8DBD9] flex text-black mt-[5rem] gap-4">
          <div className="md:basis-[20%]">
            <p className="">1,200 + Real Results:</p>
          </div>
          <marquee className="flex-1">
            <div>
              <span className="inline-block mr-20">
                🙌 “WebFX has been a game-changer for our web strategy.” | U.S.
                Healthcare Company
              </span>
              <span className="inline-block mr-20">
                💲 47% increase in year-over-year revenue | Industrial Supplier
              </span>
              <span className="inline-block mr-20">
                💲 👍 43% improvement in cost per lead | Industrial Supplier
              </span>
              <span className="inline-block mr-20">
                💲📈 34% increase in PPC conversion rate | Higher Education
              </span>
              <span className="inline-block mr-20">
                💲📝 11% increase in leads from blog content | Hospitality
                Company
              </span>
              <span className="inline-block">
                🍃 “WebFX has been a breath of fresh air.” | COO of Ecommerce
                Company
              </span>
            </div>
          </marquee>
        </div>
        <div className="px-[5rem] py-[5rem]">
          <div className="flex flex-col items-center mb-[3rem]">
            <p className="text-[36px] lg:text-[56px] xl:text-[72px] font-black text-[#0B1720] tracking-tighter leading-[78px]">
              Our partners
            </p>
            <p className="text-[24px] lg:text-[28px] xl:text-[32px] text-center font-semibold leading-10">
              These are all our prtners
            </p>
          </div>

          <HomeSlider />
        </div>
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white">
        <div className="flex flex-col items-center mb-[3rem]">
          <p className="text-[36px] lg:text-[56px] xl:text-[72px] font-black text-[#0B1720] tracking-tighter leading-[78px]">
            Your search ends here.
          </p>
          <p className="text-[24px] lg:text-[28px] xl:text-[32px] text-center font-semibold leading-10">
            Learn why businesses trust our digital marketing agency to power
            growth.
          </p>
        </div>
        <HomeTabs />
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white">
        <div className="flex flex-col items-center mb-[4rem]">
          <p className="text-[24px] lg:text-[28px] xl:text-[32px] font-black text-[#0B1720] tracking-tighter leading-[78px]">
            Our Blogs
          </p>
          <p className="font-semibold leading-10 text-[24px] lg:text-[28px] xl:text-[32px] text-center">
            Learn more about our blogs
          </p>
        </div>
        <HomePageBlogs />
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white">
        <div className="flex flex-col items-center mb-[4rem]">
          <p className="text-[24px] lg:text-[28px] xl:text-[32px] font-black text-[#0B1720] tracking-tighter leading-[78px]">
            FAQs
          </p>
          <p className="font-semibold leading-10 text-[24px] lg:text-[28px] xl:text-[32px] text-center">
            Frequently asked Questions and Answers
          </p>
        </div>
        <Faqs />
      </div>
      <div className="px-[1.5rem] xl:px-[5rem] py-[5rem] bg-white w-full">
        <div className="flex flex-col items-center mb-[4rem]">
          <p className="text-[24px] lg:text-[28px] xl:text-[32px] font-black text-[#0B1720] tracking-tighter leading-[78px]">
            Events
          </p>
          <p className="font-semibold leading-10 text-[24px] lg:text-[28px] xl:text-[32px] text-center">
            These are upcoming events
          </p>
        </div>
        <HomePageEvents />
      </div>
    </main>
  );
}
