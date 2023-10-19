import React from "react";
import DropBoxes from "../DropBoxes";

export default function Overview() {
  return (
    <div id="overview" className="min-h-[35vh] py-16 lg:py-28">
      <DropBoxes />
      <div className="container mx-auto px-16  flex flex-col items-center">
        <h2
          data-aos="flip-down"
          data-aos-delay="0"
          className="text-xl font-semibold mb-4 lg:mb-10 text-center lg:text-3xl"
        >
          Overview
        </h2>{" "}
        <p
          data-aos="fade-down"
          data-aos-delay="0"
          className="text-center text-sm lg:text-2xl max-w-4xl"
        >
          $PXL8 is not just another speculative cryptocurrency; it&apos;s a
          token with real utility embedded in the art ecosystem. It&apos;s a
          movement to empower artists and revolutionize their craft. We are all
          about organic growth, no presale, no snipers, no bullshit, just
          community!
        </p>{" "}
      </div>
    </div>
  );
}
