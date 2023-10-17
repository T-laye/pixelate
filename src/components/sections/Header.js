import React from "react";
import Logo from "../Logo";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header className="h-[8vh] border-b border-b-[#FFFFFF20] ">
      <div className="container px-5 h-full flex items-center justify-between bg-lightBlu">
        <div>
          <Logo />
        </div>
        <div className="flex items-center  space-x-2.5">
          <button className="btn btn-gradient ">Buy Now</button>
          <div>
            <FiMenu size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
