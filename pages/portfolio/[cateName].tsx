import HeroSection from "@/component/HeroSection";
import Layout from "@/component/layout/Layout";
import Content from "@/component/portfolio/Content";
import Products from "@/component/portfolio/Products";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import allProduct from "@/component/portfolio/data.json";

export default function index() {
  const router = useRouter();
  const { cateName } = router.query;
  const { t } = useTranslation();
  const products = allProduct.filter(
    (product) => product.category.name === cateName
  );

  return (
    <>
      <Layout title="OmniStack - Portfolio Page">
        <HeroSection
          title={t("headersection.portfolio.title")}
          description={t("headersection.portfolio.description")}
          imgLink={"/images/portfolioHero.jpg"}
        />
        <div className="bg-[#f3f6f9] dark:bg-[#0a1929]">
          <Content />
        </div>
        {}
        <div className="bg-white dark:bg-[#001e3c]">
          <Products
            title={t(`category.${cateName}`)}
            cateName="website"
            detail={true}
            products={products}
          />
        </div>
      </Layout>
    </>
  );
}
