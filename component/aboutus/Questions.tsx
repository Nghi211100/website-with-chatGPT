/* This example requires Tailwind CSS v3.0+ */
const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of software technology solutions for businesses of all sizes, including custom software development, app development, and cloud computing services.",
  },
  {
    question: "What is your process for developing software?",
    answer:
      "Our process for developing software involves close collaboration with our clients to understand their unique needs and requirements. We then use this information to create a customized solution that meets their specific needs.",
  },
  {
    question: "How long does it take to develop a custom software solution?",
    answer:
      "The time it takes to develop a custom software solution depends on the scope and complexity of the project. Our team will provide an estimated timeline during the planning phase of the project.",
  },
];

export default function Questions() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:pt-32 lg:py-32 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a
                href="/contact"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
