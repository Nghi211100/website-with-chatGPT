import Image from "next/image";

export default function Feature({
  features,
  title,
  left,
  imgLink,
}: {
  features: any;
  title: string;
  left?: boolean;
  imgLink: string;
}) {
  return (
    <div className="overflow-hidden max-w-[1200px] py-16 mx-auto">
      <div className="mx-auto px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
          <div className={`lg:max-w-lg my-auto ${left && "ml-auto"}`}>
            <p className="pb-6 font-bold tracking-tight text-gray-900 text-4xl">
              {title}
            </p>
            <dl className="max-w-xl space-y-1 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature: any, index: number) => (
                <div key={index} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className={`relative overflow-x-clip lg:pl-2 ${
              left && "lg:row-[1]"
            }`}
          >
            <Image
              src={imgLink}
              alt="Product screenshot"
              className="object-center h-[200px] sm:h-[300px] md:h-[400px] lg:w-auto w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
