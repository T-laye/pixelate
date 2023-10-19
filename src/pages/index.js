import Image from "next/image";
import logo from "public/$PXL8.svg";
import Layout from "@/layouts";
import Header from "@/components/sections/Header";
import Glow from "@/components/Glow";
import Hero from "@/components/sections/Hero";
import Audit from "@/components/sections/Audit";
import Boxes from "@/components/Boxes";
import Overview from "@/components/sections/Overview";
import How from "@/components/sections/How";
import Tokenomics from "@/components/sections/Tokenomics";
import RoadMap from "@/components/sections/RoadMap";
import DesktopRoadMap from "@/components/sections/DesktopRoadMap";
import Socials from "@/components/sections/Socials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative ">
        <div className="bg-[#150e28] absolute -top-28 -left-32 -z-10">
          <Glow />
        </div>
        <Header />
        <Hero />
      </section>

      {/* Overview */}
      <section className="relative ">
        <div className="absolute -right-[5%] -top-14 -z-10 rotate-60 md:right-20 lg:right-24 lg:top-10 md:scale-[1.5] lg:scale-[2]">
          <Boxes />
        </div>
        <Overview />
      </section>

      {/* How it works */}
      <section className="relative">
        <div className="absolute -left-[20%] top-48 rotate-60 -z-10 lg:hidden">
          <Boxes />
        </div>

        <div className="bg-[#150e28] hidden lg:block  absolute -z-10 lg:-left-40 lg:top-64">
          <Glow />
        </div>

        <How />
      </section>

      {/* Tokenomincs */}
      <section className="relative">
        <div className="absolute -left-[20%] bottom-48 rotate-60 -z-10  lg:-left-[10%] lg:-top-10 lg:scale-[1.5] 2xl:scale-[2]">
          <Boxes />
        </div>

        <Tokenomics />
      </section>

      {/* Road Map */}
      <section className="relative overflow-hidden lg:hidden">
        <div className="absolute left-32 top-32 md:left-[40%] rotate-[160deg] -z-10  scale-[2.5] opacity-20">
          <Boxes />
        </div>
        <div className="bg-[#150e28] top-[25%] md:top-[0%]   absolute -z-20 ">
          <Glow />
        </div>

        <RoadMap />
      </section>

      {/* Road Map */}
      <section className="relative hidden lg:block">
        <div className="absolute left-[50%] bottom-32   rotate-[160deg] -z-10  scale-[3] opacity-20">
          <Boxes />
        </div>
        <div className="bg-[#150e28] top-[25%] left-[30%]   absolute -z-20 ">
          <Glow />
        </div>
        <DesktopRoadMap />
      </section>

      {/* Audit */}
      <section className="relative">
        <div className="bg-[#150e28] absolute top-2 left-20 -z-10  lg:left-96">
          <Glow />
        </div>
        <div className="absolute -left-[66%] -top-1 -z-10 -rotate-90 md:-left-40 md:top-10 lg:-left-48 lg:top-20  lg:scale-[1.5]">
          <Boxes />
        </div>
        <div className="absolute -right-[32%] top-1 -z-10 rotate-60 md:-right-16 md:top-20 lg:-right-24 lg:top-48 md:scale-[1.5] lg:scale-[2]">
          <Boxes />
        </div>
        <Audit />
      </section>

      <section className="relative">
        <Socials />
      </section>

      <footer>
        <Footer />
      </footer>
    </Layout>
  );
}
