import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import FormContact from "./FormContact";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="relative px-6 py-16 max-w-[1200px] mx-auto">
      <div className="relative mx-auto grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold tracking-tight text-blue-500">
            {t("contact.title")}
          </h2>
          <p className="mt-3 text-lg leading-6 text-gray-500">
            {t("contact.description")}
          </p>
          <dl className="mt-8 text-base text-gray-500">
            <div>
              <dt className="sr-only">{t("contact.address")}</dt>
              <dd>
                <p>{t("contact.adddt01")}</p>
                <p>{t("contact.adddt02")}</p>
              </dd>
            </div>
            <div className="mt-6">
              <dt className="sr-only">{t("contact.phone")}</dt>
              <dd className="flex">
                <PhoneIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">+84 12-345-678</span>
              </dd>
            </div>
            <div className="mt-3">
              <dt className="sr-only">Email</dt>
              <dd className="flex">
                <EnvelopeIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">support@gmail.com</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-white dark:bg-[#001e3c] p-6 lg:col-span-3 shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c] rounded-xl">
          <FormContact />
        </div>
      </div>
    </div>
  );
}
