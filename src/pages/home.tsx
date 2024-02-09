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
            <Button
              className="flex items-center gap-3"
              color="white"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/sethu-pathi-580560170/"
                );
              }}
            >
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
        {/* Paste Here */}
        <Typography className=" mr-4 cursor-pointer py-1.5  font-bold tracking-wide text-[30px]">
          Site will be live at Febuary 13, 2024
        </Typography>
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
