import {
  CommandLineIcon,
  DeviceTabletIcon,
  CloudIcon,
} from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const cards = [
    {
      name: t("services.service01.name"),
      description: t("services.service01.description"),
      icon: CommandLineIcon,
    },
    {
      name: t("services.service02.name"),
      description: t("services.service02.description"),
      icon: DeviceTabletIcon,
    },
    {
      name: t("services.service03.name"),
      description: t("services.service03.description"),
      icon: CloudIcon,
    },
  ];
  return (
    <div className="relative isolate overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <img
        src="/images/Hero_Service.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20 relative">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
            {t("services.title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow-lg">
            {t("services.trailer")}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-blue-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white drop-shadow-lg">
                  {card.name}
                </h3>
                <p className="mt-2 text-white drop-shadow-lg">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
