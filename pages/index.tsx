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
          <div className="bg-[#f3f6f9]">
            <HeroSection />
          </div>
          <div className="bg-white">
            <Content />
          </div>
          <div className="bg-[#f3f6f9]">
            <Services />
          </div>
          <div className="bg-white">
            <Portfolio />
          </div>
          <div className="bg-[#f3f6f9]">
            <Team />
          </div>
          <div className="bg-white">
            <Testimonials />
          </div>
          <div className="bg-[#f3f6f9]">
            <Contact />
          </div>
        </div>
      </Layout>
    </>
  );
}
