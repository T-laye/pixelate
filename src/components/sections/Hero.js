import Image from "next/image";
import React, { useState } from "react";
import logo from "public/$PXL8.svg";
import x_icon from "public/icons/x-icon.svg";
import telegram_icon from "public/icons/telegram-icon.svg";
import globe from "public/images/globe.svg";
import Link from "next/link";
import DropBoxes from "../DropBoxes";
import { MdContentCopy } from "react-icons/md";

export default function Hero() {
  const address = "0x744C26E20a231D49a23b43b1d12e6F005834a8a3";
  const [valueToCopy, setValueToCopy] = useState(address);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      alert("Contract Address copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div className="h-screen pt-16 border-b border-b-[#FFFFFF20] ">
      <DropBoxes />
      <div className="container mx-auto px-7  lg:flex h-full">
        <div className="bg-pimary pt-10 lg:pt-20 2xl:pt-28 lg:flex flex-col h-1/2 lg:w-1/2  lg:h-full">
          <div className="w-40 glitch md:w-56 lg:w-64 2xl:w-80">
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
            <p className="text-sm md:text-lg 2xl:text-xl">
              We are all about Organic growth, no presale, no snipers, no
              bullshit, just Community!
            </p>
          </div>
          <div className="flex space-x-2 mt-3 2xl:mt-5">
            <Link href="#">
              <div className="w-8 lg:w-10 icon ">
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
              <div className="w-8 lg:w-10 icon ">
                <Image
                  src={telegram_icon}
                  alt="telegram"
                  height={500}
                  width={500}
                  priority
                  className="h-full w-full"
                />
              </div>
            </Link>
          </div>

          <div className="mt-4 2xl:mt-7">
            <h2 className="font-semibold text-base md:text-lg lg:text-xl">
              Contract Address
            </h2>
            <div
              onClick={handleCopyToClipboard}
              className="flex items-center space-x-3 w-fit p-2 border border-primary bg-[#D434FE1F] mt-4 rounded-md"
            >
              <div className=" text-[10px] md:text-sm lg:text-base">
                {address}
              </div>
              <div className="">
                <MdContentCopy className="lg:text-base" />
              </div>
            </div>
            <div className="mt-6 2xl:mt-10">
              <button className="btn btn-gradient ">Buy Now</button>
            </div>
          </div>
        </div>
        <div className=" h-1/2 lg:w-1/2 lg:h-full flex items-center justify-center">
          <div className=" float -mt-5  h-3/4 lg:h-full ">
            <Image
              src={globe}
              alt="globe"
              height={700}
              width={700}
              priority
              className="h-full globe-glitch w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
