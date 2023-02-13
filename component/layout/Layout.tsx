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
    <div className="min-h-screen bg-white font-sans">
      <title>{title}</title>
      <Header />
      <div className="min-h-[calc(100vh-209px)] pt-16">{children}</div>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
}
