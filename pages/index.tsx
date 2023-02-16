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
import Link from "next/link";

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
          <div className="bg-white">
            <HeroSection
              cards={cards}
              title={t("headersection.home.title")}
              description={t("headersection.home.description")}
              imgLink={"/images/Web-Developer-San-Francisco.jpeg"}
              button={
                <a
                  href="/about"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  {t("readMore")} <span aria-hidden="true">→</span>
                </a>
              }
            />
          </div>
          <div className="bg-[#f3f6f9]">
            <Content />
          </div>
          <div className="bg-white">
            <Services />
          </div>
          <div className="bg-[#f3f6f9]">
            <Portfolio />
          </div>
          <div className="bg-white">
            <Team />
          </div>
          <div className="bg-[#f3f6f9]">
            <Testimonials />
          </div>
          <div className="bg-white">
            <Contact />
          </div>
        </div>
      </Layout>
    </>
  );
}
