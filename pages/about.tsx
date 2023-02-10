import Content from "@/component/aboutus/Content";
import Questions from "@/component/aboutus/Questions";
import Layout from "@/component/Layout";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - About Page">
        <div className="space-y-8 py-20 md:py-32 text-center max-w-6xl mx-auto">
          <Content />
          <Questions />
        </div>
      </Layout>
    </>
  );
}
