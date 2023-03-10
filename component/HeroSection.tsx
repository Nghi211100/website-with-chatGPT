import Image from "next/image";
import { ReactElement } from "react";

export default function HeroSection({
  title,
  description,
  imgLink,
  button,
}: {
  title: string;
  description: string;
  imgLink: string;
  button?: ReactElement;
}) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="relative isolate overflow-hidden mx-auto sm:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-gray-400 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:py-24 lg:flex lg:px-8 text-left">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-3 md:mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              {description}
            </p>
            <div className="mt-3 md:mt-6 flex items-center gap-x-6">
              {button}
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl sm:mt-16 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-[#005eff]/10 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-[#183b61] lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={imgLink}
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="object-cover w-[76rem] max-h-[500px] rounded-md shadow-2xl ring-1 ring-gray-900/10 dark:ring-[#183b61]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
