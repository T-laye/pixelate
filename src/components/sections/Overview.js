import React from "react";
import DropBoxes from "../DropBoxes";

export default function Overview() {
  return (
    <div className="min-h-[35vh] py-16 lg:py-28">
      <DropBoxes />
      <div className="container mx-auto px-16  flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 lg:mb-10 text-center lg:text-3xl">
          Overview
        </h2>{" "}
        <p className="text-center text-sm lg:text-2xl max-w-4xl">
          Where art and technology collide! Pixel8 is a new crypto token project
          that is revolutionizing the way digital art is created, collected and
          traded. Pixel8 is built on the Ethereum blockchain, which means that
          it is secure, transparent and efficient. All pixel8 transactions are
          recorded on the blockchart, so users can be confident that their
          purchases are legitimate.
        </p>{" "}
      </div>
    </div>
  );
}
