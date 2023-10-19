import Image from "next/image";
import React from "react";
import tokenomics from "public/images/tokenomics.svg";
import DropBoxes from "../DropBoxes";

export default function Tokenomics() {
  return (
    <div
      id="tokenomics"
      className="min-h-screen py-14 lg:py-20 border-b border-b-[#FFFFFF20] "
    >
      <DropBoxes />
      <div className="container mx-auto">
        <h2
          data-aos="flip-down"
          data-aos-delay="100"
          className="text-xl font-semibold mb-14 lg:mb-20 text-center lg:text-3xl"
        >
          Tokenomics
        </h2>

        <div className="lg:flex">
          <div className="lg:w-1/2">
            <div
              data-aos="zoom-out"
              data-aos-delay="100"
              className={`w-full  bg-re-300 flex items-center mx-auto   px-10 md:px-2`}
            >
              <Image
                src={tokenomics}
                alt="icon"
                height={500}
                width={500}
                priority
                className="h-full w-full mx-auto"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-center mt-8 lg:mt-12 text-base lg:text-lg ">
                <span className="font-semibold mb-2 lg:text-xl">
                  {" "}
                  Total Supply $PXL8 <br />{" "}
                </span>{" "}
                10,000,000 $PXL tokens <br /> Liquidity Pool : 80% <br /> Team :
                9% <br /> Treasury: 6% <br /> Unallocated: 5%
              </p>
            </div>
          </div>

          <div className="mt-16 lg:w-1/2 lg:mt-0 lg:flex items-center md:px-4">
            <div
              data-aos="flip-left"
              data-aos-delay="100"
              className="mb-16 w-4/5 max-w-[450px] min-h-[250px] lg:w-full lg:p-8  relative  bg-gradient-pink border border-primary rounded-md px-5 pb-7 mx-auto"
            >
              <h3 className="text-base lg:text-2xl font-semibold text-center mt-5 lg:mt-0">
                Supply Breakdown
              </h3>

              <p className="text-sm lg:text-lg font-normal text-center mt-3">
                80% of the total supply is allocated to the liquidity pool,
                which will be locked. 9% of the total supply is reserved for the
                project&apos;s founders and team members to incentivize their
                work and commitment. 6% of the total supply is set aside for
                future development, marketing, and other strategic initiatives.
                5% of the total supply is yet to be allocated, more information
                will be passed across in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
