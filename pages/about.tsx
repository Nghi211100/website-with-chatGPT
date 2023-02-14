import Content from "@/component/aboutus/Content";
import Questions from "@/component/aboutus/Questions";
import Team from "@/component/aboutus/Team";
import Layout from "@/component/layout/Layout";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - About Page">
        <div className="bg-[#f3f6f9]">
          <Content />
        </div>
        <div className="bg-white">
          <Questions />
        </div>
        <div className="bg-[#f3f6f9]">
          <Team />
        </div>
      </Layout>
    </>
  );
}
