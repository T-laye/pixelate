import Image from "next/image";
import React from "react";
import boxes from "public/boxes.svg";

export default function Boxes() {
  return (
    <div>
      <Image src={boxes} alt="boxes" />
    </div>
  );
}
