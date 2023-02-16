import { useTranslation } from "react-i18next";

export default function Questions() {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t("about.questions.question01.question"),
      answer: t("about.questions.question01.answer"),
    },
    {
      question: t("about.questions.question02.question"),
      answer: t("about.questions.question02.answer"),
    },
    {
      question: t("about.questions.question03.question"),
      answer: t("about.questions.question03.answer"),
    },
  ];
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="sticky top-20">
            <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
              {t("about.questions.title")}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {t("about.questions.cantlookingfor")}
              <a
                href="/contact"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                {t("about.questions.support")}
              </a>
              {t("about.questions.team")}.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className="space-y-10">
            {faqs.map((faq, index) => (
              <div key={index}>
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
  );
}
