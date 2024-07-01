import React from 'react';
import "./style.css";

const FertileSection = ({ fertile }) => {

  return (
    <div className="relative mb-[30rem] sm:mb-[10rem]">
      <div className="relative w-full overflow-hidden bg-[#0B1621] flex flex-col items-center justify-center py-[4rem] sm:py-[8rem]">
        <div className="absolute inset-0 w-full h-full bg-[#0B1621] z-20 [mask-image:radial-gradient(transparent,black)] pointer-events-none"></div>
        <h1 className="md:text-[48px] text-[32px] font-black text-white relative z-20 w-full ml-[0%] sm:w-[90%] sm:ml-[5%] text-center">
          Cultivating a sustainable ecosystem FERTILE for transformative success.
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20 text-white md:text-[21px] text-[18px]">
          At SkillTribe, our FERTILE values—Focus, Enthusiasm, Responsibility, Trust, Innovation, Leadership, and Empowerment—define our commitment to nurturing talent and cultivating success in every project and partnership.
        </p>
      </div>
      <div className="absolute h-[100px] left-0 bg-transparent w-full z-50 grid gap-4 grid-cols-3 justify-center px-[1rem]
        sm:grid-cols-7
        2xl:px-[15rem] fertile"
      >
        {fertile.map((f) => (
          <div
            key={f.id}
            className={`bg-white cursor-pointer shadow-[0px_7px_8px_0px_#EAF3FC] rounded-xl flex items-center justify-center border ${f.borderClass} ${f.shadowClass}`}
          >
            <p className={`text-[72px] font-black ${f.textClass}`}>
              {f.letter}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FertileSection;
