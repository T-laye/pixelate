import Image from "next/image";
import React, { useState } from "react";
import logo from "public/$PXL8.svg";
import x_icon from "public/icons/x-icon.svg";
import telegram_icon from "public/icons/telegram-icon.svg";
import globe from "public/images/globe.svg";
import Link from "next/link";
import DropBoxes from "../DropBoxes";
import { RxDiscordLogo } from "react-icons/rx";
import { MdContentCopy } from "react-icons/md";

export default function Hero() {
  const address = "0x9fE8C0D27A2E6eCE417c6aF6BcD674e6A9855D28";
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
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-40 glitch md:w-56 lg:w-64 2xl:w-80"
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
            data-aos="fade-right"
            data-aos-delay="100"
            className="w-4/5 mt-6"
          >
            <p className="text-sm md:text-lg 2xl:text-xl">
              $PXL8 is a revolutionary token designed to empower artists and
              revolutionize the way they create and share their art.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex space-x-2 mt-3 2xl:mt-5"
          >
            <Link href="https://twitter.com/PXL8ERC">
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

            <Link href="https://t.me/pxl8erc">
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

            {/* <Link href="#"> */}
            <div
              title="Coming Soon"
              className="w-8 h-8 rounded-full bg-[#D434FE1F] border-[0.816px] border-[#D434FE]  flex items-center justify-center lg:w-10 lg:h-10 icon "
            >
              <RxDiscordLogo className="text-2xl lg:text-3xl " />
            </div>
            {/* </Link> */}
          </div>

          <div className="mt-4 2xl:mt-7 z-10 cursor-pointer max-[300px]:w-4/5">
            <h2
              data-aos="flip-down"
              data-aos-delay="300"
              className="font-semibold text-base md:text-lg lg:text-xl"
            >
              Contract Address
            </h2>
            <div
              data-aos="flip-up"
              data-aos-delay="300"
              onClick={handleCopyToClipboard}
              className="flex items-center  space-x-3 w-fit p-2 border border-primary bg-[#D434FE1F] mt-4 rounded-md"
            >
              <div className=" text-[10px] max-[300px]:text-[7px]  md:text-sm lg:text-base">
                {address}
              </div>
              <div className="">
                <MdContentCopy className="lg:text-base" />
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="mt-6 2xl:mt-10 -z-10"
            >
              <Link
                href="https://app.uniswap.org/#/swap?outputCurrency=0x9fe8c0d27a2e6ece417c6af6bcd674e6a9855d28&chain=goerli"
                target="_blank"
              >
                <button
                  data-aos="flip-down"
                  data-aos-delay="100"
                  className="btn btn-gradient "
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className=" h-1/2 lg:w-1/2  lg:h-full flex -z-20 items-center justify-center"
        >
          <div className=" float -mt-5  h-3/4 lg:h-full  ">
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
