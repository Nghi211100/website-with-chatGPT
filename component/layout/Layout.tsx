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
    <div className="min-h-screen bg-slate-50 font-sans">
      <title>{title}</title>
      <Header />
      <div className="min-h-[calc(100vh-209px)] md:pt-[149px] pt-[96px]">
        {children}
      </div>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
}
