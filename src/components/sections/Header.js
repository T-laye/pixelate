import React, { useState } from "react";
import Logo from "../Logo";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import close from "public/icons/cancel_btn.svg";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const { asPath } = useRouter();
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="h-[8vh] border-b border-b-[#FFFFFF20] ">
      <div className="container px-5 h-full flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center">
          <button className="btn btn-gradient ">Buy Now</button>
          <div onClick={handleNav} className="ml-2">
            <FiMenu size={24} />
          </div>

          {/* Mobile Navbar */}
          <nav className="lg:hidden ">
            <div className=" lg:hidden ">
              <div
                onClick={handleNav}
                className={`${
                  openNav
                    ? "h-screen duration-500 fixed "
                    : "duration-500 h-0 absolute"
                } bg-[#150e2895]   z-[100] left-0 top-0 bottom-0 right-0`}
              >
                <div
                  className={`${
                    openNav
                      ? "translate-y-0 duration-500 opacity-100"
                      : "duration-500 -translate-y-full opacity-0"
                  } flex flex-col  bg-[#150e28]  h-[55vh]   px-10 pt-10`}
                >
                  <div
                    onClick={handleNav}
                    className=" w-[23px] place-self-end mx-4 cursor-pointer"
                  >
                    <Image
                      src={close}
                      width={23}
                      height={23}
                      alt=" "
                      // onClick={handleImageClick}
                      className=" object-center w-full  object-contain "
                    />
                  </div>
                  <ul className="flex flex-col space-y-2.5 text-[18px] font-medium mt-14 bggray-800 justify-center place-self-center  w-full items-start ">
                    <li className="link duration-300">
                      <Link href="/#overview">Overview</Link>
                    </li>
                    <li className="link duration-300">
                      <Link href="/#howtobuy">How to Buy</Link>
                    </li>
                    <li className="link duration-300">
                      <Link href="/#tokenomics">Tokenomics</Link>
                    </li>
                    <li className="link duration-300">
                      <Link href="/#roadMap">Road Map</Link>
                    </li>
                    <li className="link duration-300">
                      <Link href="/#chart">Chart</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
