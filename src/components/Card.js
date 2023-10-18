import Image from "next/image";
import React from "react";

export default function Card({ number, icon, heading, text, w = "min-w-16" }) {
  return (
    <div className="mb-16 w-3/4 max-w-[270px] h-[250px] lg:min-w-[400px] lg:min-h-[354px] relative  bg-gradient-pink border border-primary rounded-md p-5 mx-auto">
      <div className="bg-primary w-[38px] h-[38px] lg:w-[60px] lg:text-xl lg:h-[60px] rounded-full font-bold text-base flex items-center justify-center absolute -top-5 -left-5">
        {number}
      </div>

      <div className="w-[67px] h-[60px] lg:h-[92px] lg:w-[92px] mx-auto relative  bg-gradient-pink border border-primary mt-4 rounded-md">
        <div
          className={`${w} h-full bg-re-300 flex items-center mx-auto   p-1`}
        >
          <Image
            src={icon}
            alt="icon"
            height={500}
            width={500}
            priority
            className="h-full w-full mx-auto"
          />
        </div>
      </div>

      <h3 className="text-base lg:text-2xl font-semibold text-center mt-5">
        {heading}
      </h3>

      <p className="text-xs lg:text-lg font-normal text-center mt-3">{text}</p>
    </div>
  );
}
