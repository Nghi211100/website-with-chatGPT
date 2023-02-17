import Contact from "@/component/contact/Contact";
import Map from "@/component/contact/Map";
import Layout from "@/component/layout/Layout";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - Contact Page">
        <div className="bg-[#f3f6f9] dark:bg-[#0a1929]">
          <Contact />
        </div>
        <div className="bg-white dark:bg-[#001e3c]">
          <Map />
        </div>
      </Layout>
    </>
  );
}
