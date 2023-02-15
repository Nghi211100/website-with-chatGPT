import HeroSection from "@/component/HeroSection";
import Layout from "@/component/layout/Layout";
import Content from "@/component/portfolio/Content";
import Products from "@/component/portfolio/Products";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function index() {
  const router = useRouter();
  const { cateName } = router.query;
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

  const ShowProd = () => {
    switch (cateName) {
      case "website":
        return (
          <Products
            title={t("product.website.title")}
            cateName="website"
            detail={true}
            products={products}
          />
        );
      case "mobile":
        return (
          <Products
            title={t("product.mobile.title")}
            cateName="mobile"
            detail={true}
            products={products}
          />
        );
      case "solution":
        return (
          <Products
            title={t("product.solution.title")}
            cateName="solution"
            detail={true}
            products={products}
          />
        );
      default:
        return <></>;
    }
  };
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
        {}
        <div className="bg-white">
          <ShowProd />
        </div>
      </Layout>
    </>
  );
}
