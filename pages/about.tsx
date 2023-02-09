import Home from "@/component/Home";
import Layout from "@/component/Layout";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Layout title="OmniStack - About Page">
        <div className="space-y-8 py-6 text-center">
          <p className="text-3xl font-bold">About OmniStack </p>
          <p>
            OmniStack is a technology company that specializes in delivering
            cutting-edge software solutions to businesses and organizations. Our
            team of experienced developers and designers are dedicated to
            delivering high-quality, user-friendly and innovative software that
            helps companies achieve their goals and stay ahead of the
            competition.
          </p>
          <p>
            Our focus is on delivering software solutions that are easy to use,
            scalable and customizable, so that businesses can easily adapt to
            changing market conditions and stay ahead of the curve. We are
            committed to delivering the best software solutions that help our
            clients grow and succeed.
          </p>
          <p>
            At OmniStack, we believe that technology has the power to transform
            the world and we are dedicated to using this power to help our
            clients achieve their goals. Whether you're looking to improve your
            workflow, streamline your operations, or simply build a better
            website, we are here to help.
          </p>
          <p>
            If you're ready to take your business to the next level, contact us
            today to see how we can help!
          </p>
          <div>
            <Link
              href={"/contact"}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
