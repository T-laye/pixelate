import Image from "next/image";
import React from "react";
import tokenomics from "public/images/tokenomics.svg";

export default function Tokenomics() {
  return (
    <div
      id="tokenomics"
      className="min-h-screen py-14 lg:py-20 border-b border-b-[#FFFFFF20] "
    >
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold mb-14 lg:mb-20 text-center lg:text-3xl">
          Tokenomics
        </h2>

        <div className="lg:flex">
          <div className="lg:w-1/2">
            <div
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

            <div>
              <p className="text-center mt-8 lg:mt-12 text-base lg:text-lg ">
                <span className="font-semibold mb-2 lg:text-xl">
                  {" "}
                  Total Supply $PXL8 <br />{" "}
                </span>{" "}
                5% community; 5% team <br /> 10,000,000 PXL tokens
              </p>
            </div>
          </div>

          <div className="mt-16 lg:w-1/2 lg:mt-0 lg:flex items-center md:px-4">
            <div className="mb-16 w-4/5 max-w-[450px] min-h-[250px] lg:w-full lg:p-8  relative  bg-gradient-pink border border-primary rounded-md p-5 mx-auto">
              <h3 className="text-base lg:text-2xl font-semibold text-center mt-5 lg:mt-0">
                Supply Breakdown
              </h3>

              <p className="text-sm lg:text-lg font-normal text-center mt-3">
                45% of the tokens are allocated for pre-sale, 29.61% is
                initially burned, and 15.39% was allocated to the V2 Uniswap LP.
                LP tokens were locked for 1 year and will be extended in the
                future. The remaining 10% of the supply is held in a multi-sig
                wallet, reserved for future centralized exchange listings,
                bridges, and to provide tokens for the 3 Uniswap LP. This wallet
                can be tracked using the ENS name “$pixel8”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
