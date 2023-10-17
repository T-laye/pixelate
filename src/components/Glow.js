import React from "react";
import glow from "public/Purple-Lens-Flare-PNG.png";
import Image from "next/image";

export default function Glow() {
  return (
    <>
      <div className="mix-blend-hard-light bg-blend-hard-light opacity-60 ">
        <Image
          src={glow}
          width={500}
          height={500}
          alt="glow"
          // onClick={handleImageClick}
          className=" object-center w-[983px] lg:w-[600px] 2xl:w-[800px]"
        />
      </div>
    </>
  );
}
