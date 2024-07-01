import React from 'react';

const ResponsiveTitle = ({ title, textColor }) => {
  return (
    <div className='py-[5rem]'>
      <p className={`text-center font-black text-[${textColor}] 
       text-[40px] leading-[1.2]
       sm:text-[80px] sm:leading-[1.1]
       md:text-[120px] md:leading-[1]
       lg:text-[150px] lg:leading-[1]
      `}
    >
      {title}
    </p>
    </div>
  );
};

const Section = ({
  title,
  leftTitle,
  leftText = [],
  rightTitle,
  rightText = [],
  bgColor,
  bgOpacity,
  textColor
}) => {
  return (
    <div className={`w-full bg-[${bgColor}] bg-opacity-${bgOpacity}`}>
      <ResponsiveTitle title={title} textColor={textColor} />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[5rem] gap-10 px-[1rem] lg:py-[5rem] py-[1rem] bg-white">
        <div>
          <p className="text-[32px] font-black mb-[1rem]">{leftTitle}</p>
          {leftText.map((paragraph, index) => (
            <p key={index} className="text-[21px] mb-[2rem]">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <p className="text-[32px] font-black mb-[1rem]">{rightTitle}</p>
          {rightText.map((paragraph, index) => (
            <p key={index} className="text-[21px] mb-[2rem]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
