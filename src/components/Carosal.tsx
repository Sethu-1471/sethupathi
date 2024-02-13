import { Carousel, IconButton } from "@material-tailwind/react";
import quotes from "../assets/quotes.svg";
import { Button, Typography } from "@material-tailwind/react";
import aswin from "../assets/person/aswin.jpg";
import prithivee from "../assets/person/prithivee.jpg";

export function CarouselTransition() {
  const value = [
    {
      image: aswin,
      name: "Aswin Balakrishnan",
      designation: "Senior Product Engineer, Codingmart Technology",
      content:
        "Sethupathi is a great full stack resource who can be an immense addition to your team of problem solvers. He's a very humble guide whilst a skilled leader. Sethupathi posesses great knowledge in js frameworks and tools in both front and backend technologies. I would like to state my strong recommendation for him.",
    },
    {
      image: prithivee,
      name: "Prithivee",
      designation: "Senior Product Developer, Riskcovry",
      content:
        "I have worked with Sethupathi on multiple projects within and outside of workplace and he is a well informed and organized person, His way of leading a team is remarkable. His capability of learning new things in short amount of time gives him a head start with his tasks",
    },
  ];
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
      loop
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
      {value.map((val, i) => {
        return (
          <div
            key={i}
            className="relative h-full w-full bg-white px-[50px] flex flex-col justify-center items-center py-5"
          >
            <div className="absolute right-9 top-0">
              <img
                className="object-cover object-center w-[50px] opacity-10"
                src={quotes}
                alt="quotes"
              />
            </div>
            <div className="bg-[#3C3F48] rounded-[50%] overflow-hidden w-[80px] h-[80px] mb-4">
              <img
                className="w-full object-cover object-center"
                src={val?.image || ""}
                alt={val?.name || ""}
              />
            </div>
            <Typography className="cursor-pointer font-bold  text-[16px] underline decoration-sky-500 text-text">
              {val?.name || ""}
            </Typography>
            <Typography className="cursor-pointer font-normal text-center tracking-wide text-[14px]">
              {val?.designation || ""}
            </Typography>
            <Typography className="cursor-pointer font-normal tracking-wide text-[13px] text-center w-[100%] md:w-[70%] mt-2">
              {val?.content || ""}
            </Typography>
          </div>
        );
      })}
    </Carousel>
  );
}
