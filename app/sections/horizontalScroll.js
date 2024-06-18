import React from "react";

const HorizontalScroll = () => {
  return (
    <div className="px-[1.5rem] xl:px-[5rem] py-[2rem] bg-primary bg-opacity-30 flex text-black gap-4">
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
            💲📝 11% increase in leads from blog content | Hospitality Company
          </span>
          <span className="inline-block">
            🍃 “WebFX has been a breath of fresh air.” | COO of Ecommerce
            Company
          </span>
        </div>
      </marquee>
    </div>
  );
};

export default HorizontalScroll;
