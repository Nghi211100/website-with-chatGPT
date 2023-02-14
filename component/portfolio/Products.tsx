import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Products({ title }: { title: string }) {
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
    <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <a
          href="#"
          className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
        >
          {t("product.viewAll")}
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                height={200}
                width={500}
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              <span className="absolute inset-0" />
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm md:hidden">
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
