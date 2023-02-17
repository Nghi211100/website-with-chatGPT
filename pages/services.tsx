import Layout from "@/component/layout/Layout";
import Content from "@/component/services/Content";
import HeroSection from "@/component/HeroSection";
import Feature from "@/component/services/Feature";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import {
  CloudIcon,
  CommandLineIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";

export default function index() {
  const { t } = useTranslation();
  const webFeatures = [
    {
      name: t("feature.webFeatures.feat01.name"),
      description: t("feature.webFeatures.feat01.description"),
    },
    {
      name: t("feature.webFeatures.feat02.name"),
      description: t("feature.webFeatures.feat02.description"),
    },
    {
      name: t("feature.webFeatures.feat03.name"),
      description: t("feature.webFeatures.feat03.description"),
    },
    {
      name: t("feature.webFeatures.feat04.name"),
      description: t("feature.webFeatures.feat04.description"),
    },
  ];
  const MobileFeatures = [
    {
      name: t("feature.mobileFeatures.feat01.name"),
      description: t("feature.mobileFeatures.feat01.description"),
    },
    {
      name: t("feature.mobileFeatures.feat02.name"),
      description: t("feature.mobileFeatures.feat02.description"),
    },
    {
      name: t("feature.mobileFeatures.feat03.name"),
      description: t("feature.mobileFeatures.feat03.description"),
    },
    {
      name: t("feature.mobileFeatures.feat04.name"),
      description: t("feature.mobileFeatures.feat04.description"),
    },
  ];
  const solutionFeatures = [
    {
      name: t("feature.solutionFeatures.feat01.name"),
      description: t("feature.solutionFeatures.feat01.description"),
    },
    {
      name: t("feature.solutionFeatures.feat02.name"),
      description: t("feature.solutionFeatures.feat02.description"),
    },
    {
      name: t("feature.solutionFeatures.feat03.name"),
      description: t("feature.solutionFeatures.feat03.description"),
    },
    {
      name: t("feature.solutionFeatures.feat04.name"),
      description: t("feature.solutionFeatures.feat04.description"),
    },
  ];
  const cards = [
    {
      name: t("services.service01.name"),
      description: t("services.service01.description"),
      icon: CommandLineIcon,
    },
    {
      name: t("services.service02.name"),
      description: t("services.service02.description"),
      icon: DeviceTabletIcon,
    },
    {
      name: t("services.service03.name"),
      description: t("services.service03.description"),
      icon: CloudIcon,
    },
  ];
  return (
    <>
      <Layout title="OmniStack - Services Page">
        <HeroSection
          cards={cards}
          title={t("services.title")}
          description={t("services.description")}
          imgLink={"/images/Hero_Service.png"}
        />
        <div className="bg-[#f3f6f9] dark:bg-[#0a1929]">
          <Content />
        </div>
        <div className="bg-white dark:bg-[#001e3c]">
          <Feature
            features={webFeatures}
            title={"Web Application Development"}
            imgLink={"/images/website-design.jpg"}
          />
        </div>
        <div className="bg-[#f3f6f9] dark:bg-[#0a1929]">
          <Feature
            features={MobileFeatures}
            title={"Mobile Application Development"}
            left={true}
            imgLink={"/images/mobile-design.jpeg"}
          />
        </div>
        <div className="bg-white dark:bg-[#001e3c]">
          <Feature
            features={solutionFeatures}
            title={"Cloud Solutions and Services"}
            imgLink={"/images/solutionandservice.jpg"}
          />
        </div>
        <div className="w-max mx-auto bg-blue-500 px-4 py-3 text-white rounded-xl mb-16 hover:bg-blue-600">
          <Link href={"/contact"}>{t("contact.contactNow")}</Link>
        </div>
      </Layout>
    </>
  );
}
