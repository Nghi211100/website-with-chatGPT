import Head from "next/head";
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
