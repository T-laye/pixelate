import Image from "next/image";
import React from "react";
import auditors from "public/images/audited.svg";
import DropBoxes from "../DropBoxes";

export default function Audit() {
  return (
    <div className="h-[32vh] border-b border-b-[#FFFFFF20] ">
      <DropBoxes />
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-full px-9">
          <Image
            src={auditors}
            alt="$PXL8"
            height={500}
            width={500}
            priority
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
