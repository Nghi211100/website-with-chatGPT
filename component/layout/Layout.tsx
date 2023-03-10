import Head from "next/head";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Header from "./Header";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Layout({
  children,
  title,
}: {
  children: any;
  title: string;
}) {
  const { i18n } = useTranslation();
  const language =
    (typeof window !== "undefined" && localStorage.getItem("language")) || "en";
  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  console.log(i18n.language);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo_only.webp" />
        <title>{title}</title>
      </Head>
      <div className="min-h-screen bg-white dark:bg-[#001e3c] font-sans">
        <Header />
        <div className="min-h-[calc(100vh-450px)] pt-14">{children}</div>
        <Footer />
        <LanguageSwitcher />
      </div>
    </>
  );
}
