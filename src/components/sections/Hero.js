import Image from "next/image";
import React from "react";
import logo from "public/$PXL8.svg";
import x_icon from "public/icons/x-icon.svg";
import telegram_icon from "public/icons/telegram-icon.svg";
import Link from "next/link";
import DropBoxes from "../DropBoxes";

export default function Hero() {
  return (
    <div className="h-[92vh]">
      <DropBoxes />
      <div className="container px-7  h-full">
        <div className="bg-pimary pt-8 h-1/2">
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
          <div className="w-4/5 mt-6">
            <p className="text-sm">
              We are all about Organic growth, no presale, no snipers, no
              bullshit, just Community!
            </p>
          </div>
          <div className="flex space-x-2 mt-3">
            <Link href="#">
              <div className="w-8 icon ">
                <Image
                  src={x_icon}
                  alt="twitter"
                  height={500}
                  width={500}
                  priority
                  className="h-full w-full"
                />
              </div>
            </Link>

            <Link href="#">
              <div className="w-8 icon ">
                <Image
                  src={telegram_icon}
                  alt="$PXL8"
                  height={500}
                  width={500}
                  priority
                  className="h-full w-full"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-lightBlue"> image</div>
      </div>
    </div>
  );
}
