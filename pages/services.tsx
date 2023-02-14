import Layout from "@/component/layout/Layout";
import Content from "@/component/services/Content";
import HeroSection from "@/component/services/HeroSection";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - Home Page">
        <HeroSection />
        <div className="bg-[#f3f6f9]">
          <Content />
        </div>
      </Layout>
    </>
  );
}
