import { Typography } from "@material-tailwind/react";
import React from "react";
import codingmart from "../assets/compaines/codingmart.png";
import qr from "../assets/compaines/quickrecruit.svg";
import topmate from "../assets/compaines/topmate.svg";
import rotaract from "../assets/rotaract.png";

export default function La() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <div className="bg-white w-[290px] h-[100px] rounded-sm text-center flex flex-col justify-center items-center">
        <img
          className="object-cover object-center w-[165px]"
          src={topmate}
          alt="topmate"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          Codingmart Technology
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px] mt-3">
          Carrer Guidance & Product Mentor
        </Typography>
      </div>
      <div className="bg-white w-[290px] h-[100px] rounded-sm text-center flex flex-col justify-center items-center">
        <img
          className="object-cover object-center w-[125px]"
          src={rotaract}
          alt="rotaract"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          Quickrecruit
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px] mt-2">
          President - IPP - Secretary
        </Typography>
      </div>
    </div>
  );
}
