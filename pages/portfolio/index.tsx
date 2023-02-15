import HeroSection from "@/component/HeroSection";
import Layout from "@/component/layout/Layout";
import Content from "@/component/portfolio/Content";
import Products from "@/component/portfolio/Products";
import { useTranslation } from "react-i18next";

export default function index() {
  const { t } = useTranslation();
  const products = [
    {
      id: 1,
      name: t("product.website.prod.prod01.name"),
      description: t("product.website.prod.prod01.description"),
      imageSrc: "/images/web-demo.webp",
      imageAlt: "",
    },
    {
      id: 1,
      name: t("product.website.prod.prod01.name"),
      description: t("product.website.prod.prod01.description"),
      imageSrc: "/images/web-demo.webp",
      imageAlt: "",
    },
    {
      id: 1,
      name: t("product.website.prod.prod01.name"),
      description: t("product.website.prod.prod01.description"),
      imageSrc: "/images/web-demo.webp",
      imageAlt: "",
    },
    {
      id: 1,
      name: t("product.website.prod.prod01.name"),
      description: t("product.website.prod.prod01.description"),
      imageSrc: "/images/web-demo.webp",
      imageAlt: "",
    },
  ];
  return (
    <>
      <Layout title="OmniStack - Portfolio Page">
        <HeroSection
          title={t("headersection.portfolio.title")}
          description={t("headersection.portfolio.description")}
          imgLink={"/images/portfolioHero.jpg"}
        />
        <div className="bg-[#f3f6f9]">
          <Content />
        </div>
        <div className="bg-white">
          <Products
            title={t("product.website.title")}
            cateName="website"
            products={products}
          />
        </div>
        <div className="bg-[#f3f6f9]">
          <Products
            title={t("product.mobile.title")}
            cateName="mobile"
            products={products}
          />
        </div>
        <div className="bg-white">
          <Products
            title={t("product.solution.title")}
            cateName="solution"
            products={products}
          />
        </div>
      </Layout>
    </>
  );
}
