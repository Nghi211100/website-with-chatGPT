import { UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="lg:flex py-16 px-5 sm:px-8 max-w-[1200px] mx-auto">
      <div className="h-[280px] lg:h-[450px] flex-1 relative my-auto">
        <Image
          className="h-full w-full object-cover"
          src={
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          }
          alt="Support team"
          fill
        />
      </div>
      <div className="px-6 my-auto flex-1 pt-6">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:max-w-none lg:pl-10 text-left">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {t("content.title")}
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            {t("content.description")}
          </p>
          <div className="mt-6 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap justify-between max-w-lg">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  {t("content.delivery")}
                </dt>
                <dd className="order-1 text-2xl font-bold text-blue-500 sm:text-3xl sm:tracking-tight">
                  24/7
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  {t("content.efficiency")}
                </dt>
                <dd className="order-1 text-2xl font-bold text-blue-500 sm:text-3xl sm:tracking-tight">
                  99.9%
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  {t("content.customer")}
                </dt>
                <dd className="order-1 text-2xl font-bold text-blue-500 sm:text-3xl sm:tracking-tight">
                  100k+
                </dd>
              </div>
            </dl>
          </div>
          <button className="pt-6 flex">
            <Link
              href={"/about"}
              className="px-4 py-3 bg-blue-500 rounded-xl shadow-xl text-white hover:bg-blue-600"
            >
              {t("contact.contactNow")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
