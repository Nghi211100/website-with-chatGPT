import { useTranslation } from "react-i18next";

export default function Product({ product }: { product: any }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="dark:border-[#1e4976] overflow-hidden rounded-xl dark:border shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c]">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={product.image} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white dark:bg-[#001e3c] p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-500">
            <a href={product.category.href} className="hover:underline">
              {t(`category.${product.category.name}`)}
            </a>
          </p>
          <div className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-50">
              {product.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {i18n.language === "en"
                ? product.descriptionEn
                : product.descriptionVi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
