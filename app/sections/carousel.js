"use client";
import { Carousel } from "@/components/material/MTailwind";
import Banner from "@/components/Banner";

const CarouselItemOne = () => {
  return (
    <Banner
      title="Bridging Industry and Education with Success!"
      description="The ecosystem that connects organizations to universities, their
      talent, and government institutions for hands-on projects that drive
      academic and industry excellence."
      buttonCaption="Become a Partner"
    />
  );
};
const CarouselItemTwo = () => {
  return (
    <Banner
      title="Empower. Create. Transform. Our Purpose Defined."
      description="Join us in shaping the future, fostering growth, and achieving
      unparalleled success through meaningful collaboration."
      buttonCaption="Schedule a Preview"
    />
  );
};
const CarouselItemThree = () => {
  return (
    <Banner
      title="Discover, Discuss, Inspire: Stories Unfold"
      description="Join us in shaping the future, fostering growth, and achieving
          unparalleled success through meaningful collaboration."
      buttonCaption="More Blogs"
    />
  );
};
const HomeCarousel = () => {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 1, type: "spring" }}
      className="py-[3rem] bg-primary-500 bg-opacity-5"
      prevArrow={({ handlePrev }) => <div className="hidden"></div>}
      nextArrow={({ handleNext }) => <div className="hidden"></div>}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-[20px] left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-5 w-5 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "w-5 bg-primary-500"
                  : "w-4 bg-primary-500/50"
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
