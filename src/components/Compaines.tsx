import { Typography } from "@material-tailwind/react";
import React from "react";
import codingmart from "../assets/compaines/codingmart.png";
import qr from "../assets/compaines/quickrecruit.svg";
import machdatum from "../assets/compaines/machdatum.svg";

export default function Compaines() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <div className="bg-white w-[290px] h-[100px] rounded-sm flex flex-col justify-center items-center">
        <img
          className="object-cover object-center w-[165px]"
          src={codingmart}
          alt="codingmart"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          Codingmart Technology
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px] mt-3">
          Senior Product Engineer
        </Typography>
        {/* <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          Feb 2021-Present
        </Typography> */}
      </div>
      <div className="bg-white w-[290px] h-[100px] rounded-sm  flex flex-col justify-center items-center">
        <img
          className="object-cover object-center w-[125px]"
          src={qr}
          alt="qr"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          Quickrecruit
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px] mt-3">
          Lead Technical Architect/Designer
        </Typography>
        {/* <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          July 2023-Present
        </Typography> */}
      </div>
      <div className="bg-white w-[290px] h-[100px] rounded-sm flex flex-col justify-center items-center">
        {/* <img
          className="object-cover object-center w-[185px] m-auto"
          src={codingmart}
          alt="linkedin"
        /> */}
        <Typography className="cursor-pointer font-bold  text-[20px] decoration-sky-500 text-text">
          Zontent AI
        </Typography>
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px] mt-1">
          Fullstack Developer
        </Typography>
        {/* <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          2023
        </Typography> */}
      </div>
      <div className="bg-white w-[290px] h-[100px] rounded-sm flex flex-col justify-center items-center">
        <img
          className="object-cover object-center w-[135px]"
          src={machdatum}
          alt="machdatum"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          MachDatum
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px] mt-3">
          Frontend Developer Intern
        </Typography>
        {/* <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          July 2020-Oct 2020
        </Typography> */}
      </div>
    </div>
  );
}
