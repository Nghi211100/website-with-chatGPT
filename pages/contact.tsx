import Contact from "@/component/contact/Contact";
import Map from "@/component/contact/Map";
import Layout from "@/component/layout/Layout";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - Contact Page">
        <div className="max-w-6xl mx-auto">
          <Contact />
          <Map />
        </div>
      </Layout>
    </>
  );
}
