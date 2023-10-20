import Image from "next/image";
import Link from "next/link";
import React from "react";
import x_icon from "public/icons/x-icon.svg";
import telegram_icon from "public/icons/telegram-icon.svg";
import { RxDiscordLogo } from "react-icons/rx";
import DropBoxes from "../DropBoxes";

export default function Socials() {
  return (
    <div className="pt-5 pb-10 lg:min-h-[50vh] 2xl:min-h-[30vh]  lg:pt-10 lg:pb-20">
      <DropBoxes />
      <div className="container mx-auto px-8">
        <h2
          data-aos="flip-down"
          data-aos-delay="100"
          className="text-xl font-semibold mb-3 lg:mb-3 text-center lg:text-3xl 2xl:text-5xl"
        >
          Socials
        </h2>

        <p
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-center text-sm max-w-lg mx-auto lg:text-lg"
        >
          Being active on our social networks can be a great way to engage with
          other community members from all over the world.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex justify-center items-center space-x-2.5 mt-4 2xl:mt-5"
        >
          <Link href="https://twitter.com/PXL8ERC">
            <div className="w-9 lg:w-14 icon ">
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
            <div className="w-9 lg:w-14 icon ">
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
            className="w-9 h-9 rounded-full bg-[#D434FE1F] border-[0.816px] border-[#D434FE]  flex items-center justify-center lg:w-14 lg:h-14 icon "
          >
            <RxDiscordLogo className="text-2xl lg:text-3xl " />
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
