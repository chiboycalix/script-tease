import React from "react";

const Title = ({ title, color = "black" }) => {
  const titleColor = color === "white" ? "text-[#fff]" : "text-[#0B1720]";
  return (
    <p
      className={`text-[30px] md:text-[36px] lg:text-[56px] xl:text-[72px] font-black ${titleColor} tracking-tighter sm:leading-[78px] leading-[48px]`}
    >
      {title}
    </p>
  );
};

export default Title;
