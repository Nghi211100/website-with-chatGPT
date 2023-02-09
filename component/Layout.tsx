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
      <div className="py-20 max-w-5xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
