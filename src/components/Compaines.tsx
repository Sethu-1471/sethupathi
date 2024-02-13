import { Typography } from "@material-tailwind/react";
import React from "react";
import codingmart from "../assets/compaines/codingmart.png";
import qr from "../assets/compaines/quickrecruit.svg";
import machdatum from "../assets/compaines/machdatum.svg";

export default function Compaines() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <div className="bg-white px-3 py-3 w-[290px] h-[100px] rounded-sm text-center">
        <img
          className="object-cover object-center w-[165px] m-auto mb-3"
          src={codingmart}
          alt="codingmart"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          Codingmart Technology
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          Senior Product Engineer
        </Typography>
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          Feb 2021-Present
        </Typography>
      </div>
      <div className="bg-white px-3 py-3 w-[290px] h-[100px] rounded-sm  text-center">
        <img
          className="object-cover object-center w-[125px] m-auto mb-3"
          src={qr}
          alt="qr"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          Quickrecruit
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          Lead Technical Architect/Designer
        </Typography>
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          July 2023-Present
        </Typography>
      </div>
      <div className="bg-white px-3 py-3 w-[290px] h-[100px] rounded-sm text-center">
        {/* <img
          className="object-cover object-center w-[185px] m-auto"
          src={codingmart}
          alt="linkedin"
        /> */}
        <Typography className="cursor-pointer font-bold  text-[20px] decoration-sky-500 text-text">
          Zontent AI
        </Typography>
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          Fullstack Developer
        </Typography>
        {/* <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          2023
        </Typography> */}
      </div>
      <div className="bg-white px-3 py-3 w-[290px] h-[100px] rounded-sm text-center">
        <img
          className="object-cover object-center w-[135px] m-auto mb-3"
          src={machdatum}
          alt="machdatum"
        />
        {/* <Typography className="cursor-pointer font-bold  text-[16px] decoration-sky-500 mt-2">
          MachDatum
        </Typography> */}
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          Frontend Developer Intern
        </Typography>
        <Typography className="cursor-pointer font-normal tracking-wide text-[14px]">
          July 2020-Oct 2020
        </Typography>
      </div>
    </div>
  );
}
