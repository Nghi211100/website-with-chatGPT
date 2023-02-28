import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Specialize() {
  const { t } = useTranslation();
  const spec = [
    { title: t("specialize.s01"), href: "/images/icontechnology.png" },
    { title: t("specialize.s02"), href: "/images/innovation.png" },
    { title: t("specialize.s03"), href: "/images/customer-service.png" },
    { title: t("specialize.s04"), href: "/images/vision.png" },
    { title: t("specialize.s05"), href: "/images/ensure.png" },
    { title: t("specialize.s06"), href: "/images/idea.png" },
    { title: t("specialize.s07"), href: "/images/clock.png" },
    { title: t("specialize.s08"), href: "/images/user-experience.png" },
  ];
  return (
    <div className="py-16 sm:px-8 px-5 mx-auto max-w-[1200px] grid grid-cols-4 gap-x-8 gap-y-12">
      {spec.map((item, index) => (
        <div className="mx-auto text-center" key={index}>
          <Image
            className="mx-auto"
            src={item.href}
            alt={"technology"}
            width={100}
            height={100}
          />
          <p className="pt-2 font-medium dark:text-white">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
