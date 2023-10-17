import Image from "next/image";
import React from "react";
import logo from "public/$PXL8.svg";
import Link from "next/link";

export default function Logo({ height, width }) {
  return (
    <Link href="/">
      <div className="w-14 ">
        <Image
          src={logo}
          alt="$PXL8"
          height={height}
          width={width}
          priority
          className="h-full w-full"
        />
      </div>
    </Link>
  );
}
