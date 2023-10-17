import Image from "next/image";
import logo from "public/$PXL8.svg";
import Layout from "@/layouts";
import Header from "@/components/sections/Header";
import Glow from "@/components/Glow";
import Hero from "@/components/sections/Hero";

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
    </Layout>
  );
}
