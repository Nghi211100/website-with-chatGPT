import Link from "next/link";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Product from "../portfolio/Product";

export default function Portfolio() {
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
      category: { name: t("product.mobile.title"), href: "/portfolio/mobile" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "ABC Company",
      category: {
        name: t("product.solution.title"),
        href: "/portfolio/solution",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "ABC Company",
      category: {
        name: t("product.solution.title"),
        href: "/portfolio/solution",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "ABC Company",
      category: {
        name: t("product.solution.title"),
        href: "/portfolio/solution",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "ABC Company",
      category: {
        name: t("product.solution.title"),
        href: "/portfolio/solution",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="py-16 sm:px-8 px-5 mx-auto max-w-[1200px]">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          {t("portfolio.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          {t("portfolio.description")}
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-lg lg:max-w-none">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-2">
              <Product product={product} />
            </div>
          ))}
        </Slider>
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
