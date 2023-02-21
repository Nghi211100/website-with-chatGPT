import Link from "next/link";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import allProduct from "../portfolio/data.json";
import Product from "../portfolio/Product";

export default function Portfolio() {
  const { t } = useTranslation();
  var settingsDesk = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-16 sm:px-8 px-5 mx-auto max-w-[1200px] overflow-hidden sm:overflow-visible">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          {t("portfolio.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          {t("portfolio.description")}
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-lg md:max-w-none">
        <div className="md:hidden block">
          <Slider {...settingsMobile}>
            {allProduct
              .sort((a, b) => {
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
              .slice(0, 6)
              .map((product, index) => (
                <div key={index} className="p-2">
                  <Product product={product} />
                </div>
              ))}
          </Slider>
        </div>
        <div className="md:block hidden">
          <Slider {...settingsDesk}>
            {allProduct
              .sort((a, b) => {
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
              .slice(0, 6)
              .map((product, index) => (
                <div key={index} className="p-2">
                  <Product product={product} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <div className="pt-6 mt-4">
        <Link
          href={"/portfolio"}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl h-max w-max"
        >
          {t("services.viewAll")}
        </Link>
      </div>
    </div>
  );
}
