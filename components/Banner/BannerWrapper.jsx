import React from "react";

const BannerWrapper = ({ children }) => {
  return (
    <div
      className="h-[30rem] w-full grid-cols-1 px-[1rem] lg:px-[3rem] gap-10 grid
      xl:grid-cols-2 xl:px-[5rem]
    "
    >
      {children}
    </div>
  );
};

export default BannerWrapper;