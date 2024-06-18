"use client";
import { Carousel } from "@/components/material/MTailwind";

const CarouselWrapper = ({ children }) => {
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
const CarouselLeft = ({ title, description, buttonCaption }) => {
  return (
    <div className="h-full basis-1/2">
      <h1
        className="w-[100%] text-[36px] font-black text-center
        lg:text-[56px] lg:text-left
        xl:text-[72px] xl:leading-[78px]
      "
      >
        {title}
      </h1>
      <p className="w-[90%] text-[1.3rem] opacity-55 mt-3 text-center lg:text-left">
        {description}
      </p>
      <div className="w-full flex mt-[2rem] justify-center lg:justify-start">
        <button className="bg-primary hover:bg-opacity-90 text-white text-[20px] w-full md:w-[50%] py-[1rem] rounded-md cursor-pointer">
          {buttonCaption}
        </button>
      </div>
    </div>
  );
};
const CarouselRight = () => {
  return <div className="h-full flex-1 flex justify-center lg:justify-start"></div>;
};
const CarouselItemOne = () => {
  return (
    <CarouselWrapper>
      <CarouselLeft
        title="Bridging Industry and Education with Success!"
        description="The ecosystem that connects organizations to universities, their
          talent, and government institutions for hands-on projects that drive
          academic and industry excellence."
        buttonCaption="Become a Partner"
      />
      <CarouselRight />
    </CarouselWrapper>
  );
};
const CarouselItemTwo = () => {
  return (
    <CarouselWrapper>
      <CarouselLeft
        title="Empower. Create. Transform. Our Purpose Defined."
        description="Join us in shaping the future, fostering growth, and achieving
          unparalleled success through meaningful collaboration."
        buttonCaption="Schedule a Preview"
      />

      <CarouselRight />
    </CarouselWrapper>
  );
};
const CarouselItemThree = () => {
  return (
    <CarouselWrapper>
      <CarouselLeft
        title="Discover, Discuss, Inspire: Stories Unfold"
        description="Join us in shaping the future, fostering growth, and achieving
          unparalleled success through meaningful collaboration."
        buttonCaption="More Blogs"
      />

      <CarouselRight />
    </CarouselWrapper>
  );
};
const HomeCarousel = () => {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 1, type: "spring" }}
      className="py-[3rem] bg-primary bg-opacity-5"
      prevArrow={({ handlePrev }) => <div className="hidden"></div>}
      nextArrow={({ handleNext }) => <div className="hidden"></div>}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-[20px] left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-5 w-5 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-5 bg-primary" : "w-4 bg-primary/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <CarouselItemOne />
      <CarouselItemTwo />
      <CarouselItemThree />
    </Carousel>
  );
};
export default HomeCarousel;
