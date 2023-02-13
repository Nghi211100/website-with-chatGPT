import Content from "@/component/home/Content";
import Team from "@/component/home/Team";
import Testimonials from "@/component/home/Testimonials";
import Layout from "@/component/layout/Layout";
import HeroSection from "@/component/home/HeroSection";
import Portfolio from "@/component/home/Portfolio";
import Services from "@/component/home/Services";
import Contact from "@/component/home/Contact";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - Home Page">
        <div className="w-full h-full text-center">
          <HeroSection />
          <div className="max-w-6xl mx-auto">
            <Content />
            <Services />
            <Portfolio />
            <Team />
            <Testimonials />
          </div>
          <Contact />
        </div>
      </Layout>
    </>
  );
}
