import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "./ThemeSwitcher";

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
      className="bg-white/80 dark:bg-[#001e3c] shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c] fixed w-full z-50 backdrop-blur"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="relative flex h-14 justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-xl p-2 text-blue-500 focus:outline-none focus:ring-0 border border-gray-300 dark:border-[#183b61]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-4 w-4" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center md:items-stretch justify-start gap-5">
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
                <div className="hidden w-full md:flex justify-between">
                  <div className="flex">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`${
                          item.current === true && "border-blue-500 border-b-2"
                        } inline-flex items-center p-2.5 text-sm font-medium text-gray-900 dark:text-gray-50`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-11 sm:right-0 flex">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden animate-wiggle overflow-hidden shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c]">
            <div className="pt-2 pb-4 bg-white dark:bg-[#0a1929b3]">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  as="a"
                  href={item.href}
                  key={index}
                  className={`${
                    item.current === true &&
                    "border-blue-500 border-l-2 text-blue-500"
                  } block py-2 pl-3 pr-4 text-base font-medium text-gray-500 dark:text-gray-400`}
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
