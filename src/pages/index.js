import Image from "next/image";
import logo from "public/$PXL8.svg";
import Layout from "@/layouts";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section>
        <Header />
      </section>
    </Layout>
  );
}
