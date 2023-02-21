import HeroSection from "@/component/HeroSection";
import Layout from "@/component/layout/Layout";
import Content from "@/component/portfolio/Content";
import Products from "@/component/portfolio/Products";
import { useTranslation } from "react-i18next";
import allProduct from "@/component/portfolio/data.json";

export default function index() {
  const { t } = useTranslation();
  const products = [
    {
      title: "ABC Company",
      category: {
        name: t("product.website.title"),
        href: "/portfolio/website",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "ABC Company",
      category: {
        name: t("product.website.title"),
        href: "/portfolio/website",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "ABC Company",
      category: {
        name: t("product.website.title"),
        href: "/portfolio/website",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "ABC Company",
      category: {
        name: t("product.website.title"),
        href: "/portfolio/website",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
  ];
  const websiteProduct = allProduct.filter(
    (product) => product.category.name === "website"
  );
  const mobileProduct = allProduct.filter(
    (product) => product.category.name === "mobile"
  );
  const solutionProduct = allProduct.filter(
    (product) => product.category.name === "solution"
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
        <div className="bg-white dark:bg-[#001e3c]">
          <Products
            title={t("category.website")}
            cateName="website"
            products={websiteProduct.slice(0, 3)}
          />
        </div>
        <div className="bg-[#f3f6f9] dark:bg-[#0a1929]">
          <Products
            title={t("category.mobile")}
            cateName="mobile"
            products={mobileProduct.slice(0, 3)}
          />
        </div>
        <div className="bg-white dark:bg-[#001e3c]">
          <Products
            title={t("category.solution")}
            cateName="solution"
            products={solutionProduct.slice(0, 3)}
          />
        </div>
      </Layout>
    </>
  );
}
