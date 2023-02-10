import Footer from "./Footer";
import Header from "./Header";

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
      <div className="md:pt-[117px] pt-[96px]">{children}</div>
      <Footer />
    </div>
  );
}
