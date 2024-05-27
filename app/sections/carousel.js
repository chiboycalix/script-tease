"use client";
import { Carousel, IconButton } from "@/components/material/MTailwind";
import { Button } from "@/components/ui/button";
import { Blog } from "@/components/material/Blog.jsx";
import { useRouter } from "next/navigation";

const HomeCarousel = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/blogs", { scroll: false });
  };
  return (
    <Carousel
      transition={{ duration: 1 }}
      className="py-[5rem]"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
      <div className="w-full px-[3rem] xl:px-[8rem] grid gap-10 lg:grid-cols-2 grid-cols-1">
        <div className="h-full basis-1/2">
          <h1 className="w-[90%] text-[36px] lg:text-[56px] xl:text-[72px] font-black xl:leading-[5.5rem] text-center lg:text-left">
            Bridging Industry and Education with Success!
          </h1>
          <p className="w-[90%] text-[1.3rem] opacity-55 mt-3 text-center lg:text-left">
            The ecosystem that connects organizations to universities, their
            talent, and government institutions for hands-on projects that drive
            academic and industry excellence.
          </p>
          <div className="w-full flex justify-center xl:justify-start">
            <Button className="bg-primary text-white mt-10">
              Become a Partner
            </Button>
          </div>
        </div>
        <div className="h-full flex-1">
          {/* <Image src={SuccessImg} alt="image 1" width={500} /> */}
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 px-[3rem] xl:px-[8rem] gap-10">
        <div className="h-full basis-1/2">
          <h1 className="w-[100%] text-[36px] lg:text-[56px] xl:text-[72px] font-black leading-[5.5rem] text-center lg:text-left">
            Our Mission
          </h1>
          <p className="w-[90%] text-[1.3rem] opacity-55 mt-3 text-center lg:text-left">
            Join us in shaping the future, fostering growth, and achieving
            unparalleled success through meaningful collaboration.
          </p>
          <div className="w-full flex justify-center xl:justify-start">
            <Button className="bg-primary text-white mt-10">
              Schedule a Preview
            </Button>
          </div>
        </div>
        <div className="h-full flex-1">
          {/* <Image src={SuccessImg} alt="image 1" width={500} /> */}
        </div>
      </div>
      <div className="h-[30rem] w-full grid lg:grid-cols-2 grid-cols-1 px-[3rem] xl:px-[8rem] gap-10">
        <div className="h-full basis-1/2">
          <h1 className="w-[100%] text-[36px] lg:text-[56px] xl:text-[72px] font-black leading-[5.5rem] text-center lg:text-left">
            Our Blogs
          </h1>
          <p className="w-[90%] text-[1.3rem] opacity-55 mt-3 text-center lg:text-left">
            Join us in shaping the future, fostering growth, and achieving
            unparalleled success through meaningful collaboration.
          </p>
          <div className="w-full flex justify-center xl:justify-start">
            <Button
              className="bg-primary text-white mt-10"
              onClick={handleClick}
            >
              All Blogs
            </Button>
          </div>
        </div>
        <div className="h-full flex-1">
          <Blog />
        </div>
      </div>
    </Carousel>
  );
};
export default HomeCarousel;
