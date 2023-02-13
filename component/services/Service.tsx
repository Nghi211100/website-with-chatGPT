import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-medium text-center mb-6">Our Services</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-6">
            <Image
              src={"/images/web-development-stacks_.jpg"}
              alt="web-development"
              width={800}
              height={700}
            />
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-medium mb-4">Web Development</h3>
              <p className="text-gray-700 mb-4">
                Our team of experienced developers can help bring your website
                ideas to life. Whether you need a simple brochure site or a
                complex web application, we have the skills and expertise to get
                the job done.
              </p>
              <a href="#" className="text-indigo-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6">
            <Image
              src={"/images/Software-Development.jpg"}
              alt="web-development"
              width={800}
              height={700}
            />
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-medium mb-4">Software Development</h3>
              <p className="text-gray-700 mb-4">
                From custom software solutions to integrations with existing
                systems, our team of software developers can help you streamline
                your business processes and improve efficiency. We'll work with
                you to understand your needs and deliver a solution that meets
                your requirements.
              </p>
              <a href="#" className="text-indigo-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6">
            <Image
              src={"/images/mobile-development.jpeg"}
              alt="web-development"
              width={800}
              height={700}
            />
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-medium mb-4">Mobile Development</h3>
              <p className="text-gray-700 mb-4">
                Whether you're looking to build an app for iOS or Android, our
                team of mobile developers can help bring your ideas to life.
                We'll work with you to understand your requirements and deliver
                a high-quality app that meets your needs.
              </p>
              <a href="#" className="text-indigo-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
