import Content from "@/component/home/Content";
import Team from "@/component/home/Team";
import Testimonials from "@/component/home/Testimonials";
import Layout from "@/component/layout/Layout";
import HeroSection from "@/component/HeroSection";
import Portfolio from "@/component/home/Portfolio";
import Services from "@/component/home/Services";
import Contact from "@/component/home/Contact";
import { useTranslation } from "react-i18next";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function index() {
  const { t } = useTranslation();
  const cards = [
    {
      name: t("headersection.home.card-one.name"),
      description: t("headersection.home.card-one.description"),
      icon: PhoneIcon,
    },
    {
      name: t("headersection.home.card-two.name"),
      description: t("headersection.home.card-two.description"),
      icon: LifebuoyIcon,
    },
    {
      name: t("headersection.home.card-three.name"),
      description: t("headersection.home.card-three.description"),
      icon: NewspaperIcon,
    },
  ];
  return (
    <>
      <Layout title="OmniStack - Home Page">
        <div className="w-full h-full text-center">
          <div className="bg-[#f3f6f9]">
            <HeroSection
              cards={cards}
              title={t("headersection.home.title")}
              description={t("headersection.home.description")}
              imgLink={"/images/Web-Developer-San-Francisco.jpeg"}
            />
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
