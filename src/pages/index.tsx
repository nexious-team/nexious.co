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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nexious - Talent Powerhouse</title>
        <meta
          property="og:title"
          content="Launch Your Freelance Career Today"
          key="title"
        />
        <meta
          name="description"
          content="Discover the tools and resources to build a successful freelance business."
          key="description"
        />
      </Head>
      <Navbar />
      <header className="hidden">
        <h1>Nexious - Talent Powerhouse</h1>
        <p>
          Discover the tools and resources to build a successful freelance
          business.
        </p>
      </header>
      <main>
        <div className="h-12 lg:h-8" />
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
