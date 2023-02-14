import Contact from "@/component/contact/Contact";
import Map from "@/component/contact/Map";
import Layout from "@/component/layout/Layout";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - Contact Page">
        <div className="bg-[#f3f6f9]">
          <Contact />
        </div>
        <div className="bg-white">
          <Map />
        </div>
      </Layout>
    </>
  );
}
