import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "service01",
      name: t("services.service01.name"),
      description: t("services.service01.description"),
      imageUrl: "/images/web-development-stacks_.jpg",
    },
    {
      id: "service02",
      name: t("services.service02.name"),
      description: t("services.service02.description"),
      imageUrl: "/images/mobile-development.jpeg",
    },
    {
      id: "service03",
      name: t("services.service03.name"),
      description: t("services.service03.description"),
      imageUrl: "/images/cloud.webp",
    },
  ];
  return (
    <div className="bg-white pb-12 pt-24 sm:pb-16 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("services.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("services.description")}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl lg:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 pb-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.id}`}
                className="w-full h-full"
              >
                <div className="h-[150px] relative">
                  <Image
                    src={service.imageUrl}
                    alt="web-development"
                    fill
                    objectFit="center"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-[55%]">
                  <h3 className="text-xl font-medium mb-4">{service.name}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                </div>
              </Link>
            ))}
          </dl>
          <Link
            href={"/services"}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
          >
            {t("services.viewAll")}
          </Link>
        </div>
      </div>
    </div>
  );
}
