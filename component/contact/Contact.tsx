import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="relative px-6 py-16 max-w-7xl mx-auto">
      <div className="relative mx-auto grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
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
        <div className="bg-white p-6 lg:col-span-3 shadow-lg rounded-lg">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only">
                {t("contact.fullname")}
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`${t("contact.fullname")}`}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                {t("contact.phone")}
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`${t("contact.phone")}`}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`${t("contact.message")}`}
                defaultValue={""}
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-lg border border-transparent bg-blue-500 py-3 px-8 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t("contact.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
