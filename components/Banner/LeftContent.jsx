import React from 'react'
import Button from "@/components/Button";

const LeftContent = ({ title, description, buttonCaption=null }) => {
    return (
      <div className="h-full basis-1/2">
        <h1
          className="w-[100%] text-[30px] font-black
          md:text-[36px]
          lg:text-[56px] 
          xl:text-[60px] xl:leading-[66px]
        "
        >
          {title}
        </h1>
        <p className="w-[90%] text-[1.3rem] opacity-55 mt-3">
          {description}
        </p>
        {buttonCaption && <div className="w-[100%] ml-[0%] sm:w-[50%] md:w-[60%] flex mt-[2rem] items-center justify-center lg:justify-start">
          <Button caption={buttonCaption} />
        </div> }
        
      </div>
    );
  };

export default LeftContent