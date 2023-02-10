import Link from "next/link";
import Content from "./home/Content";
import Feature from "./home/Feature";
import Testimonials from "./home/Testimonials";
import HeaderSection from "./home/HeaderSection";

export default function Home() {
  return (
    <div className="w-full h-full text-center">
      <HeaderSection />
      <div className="max-w-6xl mx-auto">
        <Content />
        <Feature />
        <Testimonials />
      </div>
    </div>
  );
}
