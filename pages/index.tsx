import Content from "@/component/home/Content";
import Feature from "@/component/home/Feature";
import Team from "@/component/home/Team";
import Testimonials from "@/component/home/Testimonials";
import Layout from "@/component/layout/Layout";
import HeroSection from "@/component/home/HeroSection";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - Home Page">
        <div className="w-full h-full text-center">
          <HeroSection />
          <div className="max-w-6xl mx-auto">
            <Content />
            <Feature />
            <Team />
            <Testimonials />
          </div>
        </div>
      </Layout>
    </>
  );
}
