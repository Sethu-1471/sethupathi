import React from "react";
import quotes from "../assets/quotes.svg";
import { Button, Typography } from "@material-tailwind/react";
import sethupathi from "../assets/sethu.png";

export default function Testimonial() {
  return (
    <div className="flex flex-wrap">
      <div className="bg-white px-5 py-3 w-fit border-solid border-2  border-a-secondary">
        <div className="flex justify-between">
          <div className="bg-[#3C3F48] rounded-[50%] overflow-hidden w-[80px] h-[80px] mb-4">
            <img
              className="w-full object-cover object-center"
              src={sethupathi}
              alt="Sethupathi"
            />
          </div>
          <div>
            <img
              className="object-cover object-center w-[50px] opacity-10"
              src={quotes}
              alt="Sethupathi"
            />
          </div>
        </div>
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
  );
}
