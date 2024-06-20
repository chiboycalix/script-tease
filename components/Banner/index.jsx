import React from "react";
import BannerWrapper from "./BannerWrapper";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Banner = ({ title, description, buttonCaption }) => {
  return (
    <BannerWrapper>
      <LeftContent
        title={title}
        description={description}
        buttonCaption={buttonCaption}
      />

      <RightContent />
    </BannerWrapper>
  );
};

export default Banner;
