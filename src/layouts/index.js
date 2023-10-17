// import Glow from "@/components/Glow";
// import NavBar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useState } from "react";
// import Logo from "src/components/Logo";

export default function Layout({ title, children }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const currentScrollPos = window.pageYOffset;
  //       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
  //       setPrevScrollPos(currentScrollPos);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [prevScrollPos]);
  return (
    <>
      <Head>
        <title>{title ? `${title} | Pixelate` : "Pixelate"}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* <header
        className={`flex lg:items-end bg-red-40 border-b-[1px] border-b-[#ffffff18] h-[8vh] lg:h-[12vh] lg:py-3 fixed w-full p-4 transition-transform ${
          visible
            ? "top-0 transform translate-y-0 scrolling-header lg:overflow-hidden"
            : "-top-full transform -translate-y-full "
        }`}
      >
      </header> */}

      <main className="overflow-hidden">{children}</main>
    </>
  );
}
