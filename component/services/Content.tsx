import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {t("services.content.title")}
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            {t("services.content.content01")}
          </p>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            {t("services.content.content02")}{" "}
            <Link href={"/contact"} className="text-blue-500 font-semibold">
              {t("contact.title")}
              {" -->"}
            </Link>
          </p>
        </div>
      </div>
      <div className="pt-10">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 border-b shadow-md" />
          <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-xl bg-white dark:bg-[#001e3c] shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c] sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    {t("content.efficiency")}
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">
                    99.9%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    {t("content.delivery")}
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    {t("content.customer")}
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">
                    100k+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
