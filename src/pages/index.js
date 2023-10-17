import Image from "next/image";
import logo from "public/$PXL8.svg";
import Layout from "@/layouts";
import Header from "@/components/sections/Header";
import Glow from "@/components/Glow";
import Hero from "@/components/sections/Hero";
import Audit from "@/components/sections/Audit";
import Boxes from "@/components/Boxes";

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

      {/* Audit */}
      <section className="relative">
        <div className="bg-[#150e28] absolute top-2 left-20 -z-10">
          <Glow />
        </div>
        <div className="absolute -left-[66%] -top-1 -rotate-90">
          <Boxes />
        </div>
        <div className="absolute -right-[32%] top-1 rotate-60">
          <Boxes />
        </div>
        <Audit />
      </section>

      {/* Overview */}
      <section className="relative">
       
        <Audit />
      </section>
    </Layout>
  );
}
