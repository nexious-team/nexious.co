import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { MissionSection } from "@/components/MissionSection";
import { VisionSection } from "@/components/VisionSection";
import { ContactSection } from "@/components/ContactSection";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nexious - Talent Powerhouse</title>
      </Head>
      <Navbar />
      <main>
        <div className="h-12 lg:h-24" />
        <HeroSection />
        <div className="h-24" />
        <ProductsSection />
        <div className="h-24" />
        <MissionSection />
        <div className="h-24" />
        <VisionSection />
        <div className="h-24" />
        <ContactSection />
        <div className="h-24" />
      </main>
      <Footer />
    </Layout>
  );
}
