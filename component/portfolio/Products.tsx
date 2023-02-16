import Image from "next/image";
import { useTranslation } from "react-i18next";

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
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        {!detail && (
          <a
            href={`/portfolio/${cateName}`}
            className="hidden text-sm font-medium text-blue-500 hover:text-blue-600 md:block"
          >
            {t("product.viewAll")}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {products.map((product: any) => (
          <div key={product.id} className="group relative">
            <div className="w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75">
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
      {!detail && (
        <div className="mt-8 text-sm md:hidden">
          <a
            href={`/portfolio/${cateName}`}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            {t("product.viewAll")}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
}
