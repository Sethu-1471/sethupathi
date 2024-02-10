import React from "react";
import { Header } from "../components/Header";
import { BreadcrumbsComponent } from "../components/Breadcrumbs";
import { Button, Typography } from "@material-tailwind/react";
import sethupathi from "../assets/sethu.png";
import Typewriter from "typewriter-effect";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Testimonial from "../components/Testimonial";
import { CarouselTransition } from "../components/Carosal";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:px-6">
        <BreadcrumbsComponent />
        <div className="bg-main flex flex-wrap py-5">
          <div className="flex-1 py-5">
            <div className="flex justify-center align-middle items-center w-full h-full flex-col">
              <div className="w-[80%]">
                {/* <Typography className=" mr-4 cursor-pointer py-1.5 text-white font-bold tracking-wide text-[30px]">
                  P. Sethupathi
                </Typography> */}
                <Typography className="mr-4 py-1.5 text-white font-normal tracking-wide md:text-[24px] text-[16px]">
                  <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Software Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Fullstack Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Senior Product Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center py-5">
            <Button className="flex items-center gap-3" color="white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect
            </Button>
            {/* <div className=" overflow-hidden  w-[200px] h-[200px]">
              <img
                className="w-full object-cover object-center"
                src={sethupathi}
                alt="Sethupathi"
              />
            </div> */}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 py-3">
          <div className="flex-1 w-12">
            <div className="bg-white flex items-center justify-center flex-col py-3">
              <div className="bg-[#3C3F48] rounded-[50%] overflow-hidden w-[150px] h-[150px] mb-4">
                <img
                  className="w-full object-cover object-center"
                  src={sethupathi}
                  alt="Sethupathi"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Typography className=" cursor-pointer font-bold  text-[18px]">
                  P. Sethupathi
                </Typography>
                <Typography className="cursor-pointer font-normal tracking-wide text-[16px]">
                  sethu1471@gmail.com
                </Typography>
                <Typography className="cursor-pointer font-normal tracking-wide text-[16px] flex gap-2">
                  <PhoneIcon width={18} /> +91-9025548991
                </Typography>
                <Typography className="cursor-pointer font-normal tracking-wide text-[16px] flex gap-2">
                  <PhoneIcon width={18} /> +91-8825598814
                </Typography>
              </div>
            </div>
            <div className="bg-white my-3 px-5 py-3">
              <Typography className="cursor-pointer font-bold  text-[18px] underline decoration-sky-500">
                Skills
              </Typography>
              <div className="flex flex-col gap-2 mt-3">
                <Typography className="cursor-pointer font-normal tracking-wide text-[16px]">
                  1. Javascript
                </Typography>{" "}
                <Typography className="cursor-pointer font-normal tracking-wide text-[16px]">
                  1. Javascript
                </Typography>{" "}
                <Typography className="cursor-pointer font-normal tracking-wide text-[16px]">
                  1. Javascript
                </Typography>{" "}
                <Typography className="cursor-pointer font-normal tracking-wide text-[16px]">
                  1. Javascript
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex-auto w-64 bg-white px-5 py-3">
            <Typography className="cursor-pointer font-bold  text-[18px] underline decoration-sky-500">
              Me
            </Typography>
          </div>
          <div className="flex-1 w-22">
            <div className="bg-white px-5 py-3">
              <Typography className="cursor-pointer font-bold  text-[18px] underline decoration-sky-500">
                Codingmart Technology
              </Typography>
              <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
                Senior Product Engineer
              </Typography>
              <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
                2021-Present
              </Typography>
              <div className="mt-2">
                <Typography className="cursor-pointer font-normal tracking-wide text-[13px]">
                  1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography className="cursor-pointer font-normal tracking-wide text-[13px]">
                  1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography className="cursor-pointer font-normal tracking-wide text-[13px]">
                  1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-main flex flex-wrap my-3 px-5 py-3 flex-col">
          {/* <Typography className=" cursor-pointer font-semibold text-white text-[20px]">
            Why Me?
          </Typography> */}
          <div className="flex flex-wrap my-3 mx-3 justify-evenly">
            <div className="flex justify-center flex-col items-center text-white">
              <Typography className="cursor-pointer font-bold tracking-wide text-[26px]">
                6k+
              </Typography>
              <Typography className="cursor-pointer font-medium tracking-wide text-[18px]">
                Linkedin Followers{" "}
              </Typography>
            </div>

            <div className="flex justify-center flex-col items-center text-white">
              <Typography className="cursor-pointer font-bold tracking-wide text-[26px]">
                3
              </Typography>
              <Typography className="cursor-pointer font-medium tracking-wide text-[18px]">
                Worked with Startups
              </Typography>
            </div>

            <div className="flex justify-center flex-col items-center text-white">
              <Typography className="cursor-pointer font-bold tracking-wide text-[26px]">
                5+
              </Typography>
              <Typography className="cursor-pointer font-medium tracking-wide text-[18px]">
                Talks Delivered
              </Typography>
            </div>
          </div>
        </div>
        {/* Testimonial */}
        <div>
          <div>
            <Typography className=" cursor-pointer font-bold  text-[26px] mb-5">
              Let's hear from the people I have worked with
            </Typography>

            {/* <Testimonial /> */}
            <CarouselTransition />
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-center my-5">
          <Typography className="cursor-pointer font-normal tracking-wide text-[13px]">
            Copyright © 2024 - SETHU
          </Typography>
        </div>
      </div>
    </div>
  );
}
