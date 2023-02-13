import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const cards = [
    {
      name: t("headersection.card-one.name"),
      description: t("headersection.card-one.description"),
      icon: PhoneIcon,
    },
    {
      name: t("headersection.card-two.name"),
      description: t("headersection.card-two.description"),
      icon: LifebuoyIcon,
    },
    {
      name: t("headersection.card-three.name"),
      description: t("headersection.card-three.description"),
      icon: NewspaperIcon,
    },
  ];
  return (
    <div className="relative isolate overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 bg-black/25 z-10"></div>
      <img
        src="/images/Web-Developer-San-Francisco.jpeg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20 relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
            OmniStack
          </h2>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow-lg">
            {t("headersection.description")}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
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
