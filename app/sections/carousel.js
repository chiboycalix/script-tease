"use client";
import { Carousel } from "@/components/material/MTailwind";

const CarouselItemOne = () => {
  return (
    <div className="w-full px-[3rem] xl:px-[5rem] grid gap-10 lg:grid-cols-2 grid-cols-1">
      <div className="h-full basis-1/2">
        <h1 className="w-[100%] text-[36px] lg:text-[56px] xl:text-[72px] font-black xl:leading-[5.5rem] text-center lg:text-left">
          Bridging Industry and Education with Success!
        </h1>
        <p className="w-[90%] text-[1.3rem] opacity-55 mt-3 text-center lg:text-left">
          The ecosystem that connects organizations to universities, their
          talent, and government institutions for hands-on projects that drive
          academic and industry excellence.
        </p>
        <div className="w-full flex justify-center xl:justify-start mt-[2rem]">
          <button className="bg-primary hover:bg-opacity-90 text-white text-[20px] w-[50%] py-[1rem] rounded-md cursor-pointer">
            Become a Partner
          </button>
        </div>
      </div>
      <div className="h-full flex-1"></div>
    </div>
  );
};
const CarouselItemTwo = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 px-[3rem] xl:px-[5rem] gap-10">
      <div className="h-full basis-1/2">
        <h1 className="w-[100%] text-[36px] lg:text-[56px] xl:text-[72px] font-black leading-[5.5rem] text-center lg:text-left">
          Empower. Create. Transform. Our Purpose Defined.
        </h1>
        <p className="w-[100%] text-[1.3rem] opacity-55 mt-3 text-center lg:text-left">
          Join us in shaping the future, fostering growth, and achieving
          unparalleled success through meaningful collaboration.
        </p>
        <div className="w-full flex justify-center xl:justify-start mt-[2rem]">
          <button className="bg-primary hover:bg-opacity-90 text-white text-[20px] w-[50%] py-[1rem] rounded-md cursor-pointer">
            Schedule a Preview
          </button>
        </div>
      </div>
      <div className="h-full flex-1"></div>
    </div>
  );
};
const CarouselItemThree = () => {
  return (
    <div className="h-[30rem] w-full grid lg:grid-cols-2 grid-cols-1 px-[3rem] xl:px-[5rem] gap-10">
      <div className="h-full basis-1/2">
        <h1 className="w-[100%] text-[36px] lg:text-[56px] xl:text-[72px] font-black leading-[5.5rem] text-center lg:text-left">
          Discover, Discuss, Inspire: Stories Unfold
        </h1>
        <p className="w-[100%] text-[1.3rem] opacity-55 mt-3 text-center lg:text-left">
          Join us in shaping the future, fostering growth, and achieving
          unparalleled success through meaningful collaboration.
        </p>
        <div className="w-full flex justify-center xl:justify-start mt-[2rem]">
          <button className="bg-primary hover:bg-opacity-90 text-white text-[20px] w-[50%] py-[1rem] rounded-md cursor-pointer">
            More Blogs
          </button>
        </div>
      </div>
      <div className="h-full flex-1"></div>
    </div>
  );
};
const HomeCarousel = () => {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 1, type: "spring" }}
      className="py-[3rem]"
      prevArrow={({ handlePrev }) => (
        <div className="hidden"></div>
      )}
      nextArrow={({ handleNext }) => (
        <div className="hidden"></div>
      )}
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
