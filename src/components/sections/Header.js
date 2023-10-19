import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import close from "public/icons/cancel_btn.svg";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const { asPath } = useRouter();
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header
      className={`h-[8vh] lg:h-[13vh] 2xl:h-[10vh] border-b border-b-[#FFFFFF20] fixed w-full transition-transform ${
        visible
          ? "top-0 transform translate-y-0 scrolling-header lg:overflow-hidden"
          : "-top-full transform -translate-y-full "
      } `}
    >
      <div className="container mx-auto px-5 h-full flex items-center justify-between">
        <div data-aos="flip-down" data-aos-delay="100">
          <Logo />
        </div>
        <div className="flex items-center">
          {/* Desktop Navbar */}
          <nav
            data-aos="flip-down"
            data-aos-delay="100"
            className="hidden lg:block mr-10"
          >
            <ul className="flex space-x-10 text-base">
              <li className="link ">
                <Link href="/#overview">Overview</Link>
              </li>
              <li className="link ">
                <Link href="/#how">How to Buy</Link>
              </li>
              <li className="link ">
                <Link href="/#tokenomics">Tokenomics</Link>
              </li>
              <li className="link ">
                <Link href="/#roadMap">Road Map</Link>
              </li>
              <li className="link ">
                <Link href="/#chart">Chart</Link>
              </li>
            </ul>
          </nav>
          <button
            data-aos="flip-down"
            data-aos-delay="100"
            className="btn btn-gradient "
          >
            Buy Now
          </button>
          <div
            data-aos="flip-down"
            data-aos-delay="100"
            onClick={handleNav}
            className="ml-2 cursor-pointer lg:hidden"
          >
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
                      : "duration-300 -translate-y-full opacity-0"
                  } flex flex-col  bg-[#150e28]  h-[55vh]   px-10 pt-10`}
                >
                  <div
                    onClick={handleNav}
                    className=" w-[28px] place-self-end mx-4 cursor-pointer"
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
                    <li className="link ">
                      <Link href="/#overview">Overview</Link>
                    </li>
                    <li className="link ">
                      <Link href="/#how">How to Buy</Link>
                    </li>
                    <li className="link ">
                      <Link href="/#tokenomics">Tokenomics</Link>
                    </li>
                    <li className="link ">
                      <Link href="/#roadmap">Road Map</Link>
                    </li>
                    <li className="link ">
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
