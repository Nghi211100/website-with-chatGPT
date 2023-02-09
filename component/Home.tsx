import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full p-6 text-center">
      <h1 className="text-3xl font-medium mb-6 text-center">OmniStack</h1>
      <p className="text-gray-700 text-base mb-6 text-center">
        Welcome to the official website of OmniStack Company, where we offer
        top-notch web and mobile development services.
      </p>
      <Link
        href={"/about"}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg"
      >
        Learn More
      </Link>
    </div>
  );
}
