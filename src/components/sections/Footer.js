import Image from "next/image";
import React from "react";
import logo from "public/$PXL8.svg";
import DropBoxes from "../DropBoxes";

export default function Footer() {
  return (
    <div className="py-5   lg:min-h-[30vh] lg:pt-10  bg-gradient-pink">
      <DropBoxes />
      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-32 glitch md:w-56 lg:w-64 2xl:w-80 mx-auto"
        >
          <Image
            src={logo}
            alt="$PXL8"
            height={500}
            width={500}
            priority
            className="h-full w-full"
          />
        </div>

        <div
          data-aos="flip-down"
          data-aos-delay="100"
          className="text-sm lg:text-lg text-center mt-3"
        >
          2023 $PXL8. All rights reserved.
        </div>
      </div>
    </div>
  );
}
