import { Carousel, IconButton } from "@material-tailwind/react";
import quotes from "../assets/quotes.svg";
import { Button, Typography } from "@material-tailwind/react";
import sethupathi from "../assets/sethu.png";

export function CarouselTransition() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className=""
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
    >
      <div className="relative h-full w-full bg-white px-[50px] flex flex-col justify-center items-center py-5">
        <div className="absolute right-9 top-0">
          <img
            className="object-cover object-center w-[50px] opacity-10"
            src={quotes}
            alt="Sethupathi"
          />
        </div>
        <div className="bg-[#3C3F48] rounded-[50%] overflow-hidden w-[80px] h-[80px] mb-4">
          <img
            className="w-full object-cover object-center"
            src={sethupathi}
            alt="Sethupathi"
          />
        </div>
        <Typography className="cursor-pointer font-bold  text-[18px] underline decoration-sky-500">
          Codingmart Technology
        </Typography>
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          Senior Product Engineer
        </Typography>
        <div className="mt-2">
          <Typography className="cursor-pointer font-normal tracking-wide text-[13px] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quos
            eveniet incidunt id? Ab eius facere eos inventore incidunt
            reprehenderit autem. Qui accusantium itaque blanditiis culpa iusto
            eius numquam ad.{" "}
          </Typography>
        </div>
      </div>
    </Carousel>
  );
}
