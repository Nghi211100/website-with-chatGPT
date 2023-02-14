import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();
  const navigation = [
    {
      name: t("header.home"),
      href: "/",
      current: router.route === "/" ? true : false,
    },
    {
      name: t("header.services"),
      href: "/services",
      current: router.route === "/services" ? true : false,
    },
    {
      name: t("header.portfolio"),
      href: "/portfolio",
      current: router.route === "/portfolio" ? true : false,
    },
    {
      name: t("header.about"),
      href: "/about",
      current: router.route === "/about" ? true : false,
    },
    {
      name: t("header.contact"),
      href: "/contact",
      current: router.route === "/contact" ? true : false,
    },
  ];
  return (
    <Disclosure
      as="nav"
      className="bg-white/80 shadow-md fixed w-full z-50 backdrop-blur"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-500 focus:outline-none focus:ring-0">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start sm: gap-12">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      href={item.href}
                      className={`${
                        item.current === true && "border-blue-500 border-b-2"
                      } inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4 bg-white/80">
              {navigation.map((item) => (
                <Disclosure.Button
                  as="a"
                  href={item.href}
                  className={`${
                    item.current === true &&
                    "border-blue-500 border-l-2 text-blue-500"
                  } block py-2 pl-3 pr-4 text-base font-medium text-gray-500`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
