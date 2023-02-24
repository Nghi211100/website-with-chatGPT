import HeroSection from "@/component/HeroSection";
import Layout from "@/component/layout/Layout";
import Content from "@/component/portfolio/Content";
import Products from "@/component/portfolio/Products";
import { useTranslation } from "react-i18next";
import allProduct from "@/component/portfolio/data.json";
import Combobox from "@/component/portfolio/Combobox";
import { useEffect, useState } from "react";
import { iProduct } from "@/component/portfolio/Product";

export default function index() {
  const { t } = useTranslation();
  const [xWeb, setXWeb] = useState(false);
  const [xMob, setXMob] = useState(false);
  const [xSol, setXSol] = useState(false);
  const [products, setProducts] = useState<iProduct[]>();
  const [loadMore, setLoadMore] = useState(1);

  const loadProduct = () => {
    setProducts(
      !xWeb && !xMob && !xSol
        ? allProduct.sort((a, b) => {
            const nameA = a.title.toUpperCase();
            const nameB = b.title.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        : allProduct.filter(
            (product) =>
              (xWeb && product.cateName === "website") ||
              (xMob && product.cateName === "mobile") ||
              (xSol && product.cateName === "solution")
          )
    );
  };

  useEffect(() => {
    loadProduct();
  }, [xWeb, xMob, xSol]);

  const handleLoad = () => {
    if (loadMore * 9 >= (products?.length || 99999)) {
      setLoadMore(1);
    } else setLoadMore(loadMore + 1);
  };

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
        <div className="md:grid md:grid-cols-12 mx-auto lg:max-w-[1200px]">
          <div className="col-span-2">
            <Combobox
              xWeb={xWeb}
              setXWeb={setXWeb}
              xMob={xMob}
              setXMob={setXMob}
              setXSol={setXSol}
              xSol={xSol}
            />
          </div>
          <div className="bg-white dark:bg-[#001e3c] col-span-10">
            <Products products={products?.slice(0, 9 * loadMore)} />
            <button
              onClick={() => handleLoad()}
              className={`${
                loadMore * 9 >= (products?.length || 99999)
                  ? "bg-gray-300 hover:bg-gray-400 text-black dark:bg-gray-500 hover:dark:bg-gray-600 dark:text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } ml-6 px-4 py-3 mb-16 rounded-xl  font-medium`}
            >
              {loadMore * 9 >= (products?.length || 99999)
                ? t("hide")
                : t("loadMore")}
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
