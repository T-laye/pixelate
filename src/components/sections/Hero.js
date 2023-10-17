import Image from "next/image";
import React from "react";
import logo from "public/$PXL8.svg";

export default function Hero() {
  return (
    <div className="h-[92vh]">
      <div className="container px-7  h-full">
        <div className="bg-pimary py-8 h-1/2">
          <div className="w-40 glitch ">
            <Image
              src={logo}
              alt="$PXL8"
              height={500}
              width={500}
              priority
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="bg-lightBlue"> image</div>
      </div>
    </div>
  );
}
