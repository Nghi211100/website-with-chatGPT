import { useTranslation } from "react-i18next";
import Product from "./Product";

export default function Products({
  title,
  cateName,
  detail,
  products,
}: {
  title: string;
  cateName: string;
  detail?: boolean;
  products: any;
}) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-[1200px]">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          {title}
        </h2>
        {!detail && (
          <a
            href={`/portfolio/${cateName}`}
            className="hidden text-sm font-medium text-blue-500 hover:text-blue-600 md:block"
          >
            {t("viewAll")}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
        {products.map((product: any) => (
          <div key={product.id} className="group relative">
            <Product product={product} />
          </div>
        ))}
      </div>
      {!detail && (
        <div className="mt-8 text-sm md:hidden">
          <a
            href={`/portfolio/${cateName}`}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            {t("viewAll")}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
}
