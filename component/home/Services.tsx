import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      name: t("services.service01.name"),
      description: t("services.service01.description"),
      imageUrl: "/images/web-development-stacks_.jpg",
    },
    {
      name: t("services.service02.name"),
      description: t("services.service02.description"),
      imageUrl: "/images/mobile-development.jpeg",
    },
    {
      name: t("services.service03.name"),
      description: t("services.service03.description"),
      imageUrl: "/images/cloud.webp",
    },
  ];
  return (
    <div className="py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {t("services.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t("services.description01")}
          </p>
          <Link
            href={"/contact"}
            className="text-blue-500 font-semibold flex justify-center items-center"
          >
            {t("contact.contactNow")}
            <ArrowLongRightIcon className="h-6 pl-1" />
          </Link>
        </div>
        <div className="mx-auto pt-8 max-w-2xl lg:max-w-[1200px] space-y-6">
          <div className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full h-full shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c] dark:border-[#1e4976] dark:border rounded-xl overflow-hidden"
              >
                <div className="h-[150px] relative">
                  <Image
                    className="object-cover"
                    src={service.imageUrl}
                    alt="web-development"
                    fill
                  />
                </div>
                <div className="bg-gray-100 dark:bg-[#132f4c] p-4 h-[55%]">
                  <h3 className="text-xl font-medium mb-4 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-500 mb-4">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-6">
            <Link
              href={"/services"}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl h-max w-max"
            >
              {t("viewDetail")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
