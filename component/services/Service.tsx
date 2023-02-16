import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
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
    <section className="bg-white">
      <div className="mx-auto py-16 max-w-[1200px]">
        <h2 className="text-3xl font-medium text-center mb-6">
          {t("services.title")}
        </h2>
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
              <div className="bg-gray-100 rounded-xl p-4 h-[55%]">
                <h3 className="text-xl font-medium mb-4">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>
            </Link>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Services;
