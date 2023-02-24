import {
  ChevronDownIcon,
  ChevronUpIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Combobox({
  xWeb,
  setXWeb,
  xMob,
  setXMob,
  setXSol,
  xSol,
}: {
  xWeb: boolean;
  setXWeb: Dispatch<SetStateAction<boolean>>;
  xMob: boolean;
  setXMob: Dispatch<SetStateAction<boolean>>;
  setXSol: Dispatch<SetStateAction<boolean>>;
  xSol: boolean;
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const Options = (mobile?: boolean) => {
    return (
      <div
        className={`${
          mobile &&
          "mt-1 absolute px-3 z-10 w-full bg-white dark:bg-[#001e3c] transition-all overflow-hidden border border-gray-200 dark:border-[#183b61] shadow-lg md:border-0"
        } ${
          mobile
            ? open
              ? "h-max py-3 rounded-xl"
              : "h-0 border-transparent"
            : "block"
        }`}
      >
        <div className="flex gap-2 md:pt-4 w-max h-max">
          <input
            id="website"
            aria-describedby="website-description"
            name="website"
            type="checkbox"
            className="h-4 w-4 rounded-md focus:[--tw-ring-offset-width:0px] focus:ring-0 border border-gray-300 outline-none bg-transparent dark:border-[#183b61] mt-[5px]"
            onChange={() => setXWeb(!xWeb)}
            checked={xWeb ? true : false}
          />
          <label
            htmlFor="website"
            className="font-medium text-black dark:text-white"
          >
            {t("category.website")}
          </label>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            id="mobile"
            aria-describedby="mobile-description"
            name="mobile"
            type="checkbox"
            className="h-4 w-4 rounded-md focus:[--tw-ring-offset-width:0px] focus:ring-0 border border-gray-300 outline-none bg-transparent dark:border-[#183b61] mt-[5px]"
            onChange={() => setXMob(!xMob)}
            checked={xMob ? true : false}
          />
          <label
            htmlFor="mobile"
            className="font-medium text-black dark:text-white"
          >
            {t("category.mobile")}
          </label>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            id="solution"
            aria-describedby="solution-description"
            name="solution"
            type="checkbox"
            className="h-4 w-4 rounded-md focus:[--tw-ring-offset-width:0px] focus:ring-0 border border-gray-300 outline-none bg-transparent dark:border-[#183b61] mt-[5px]"
            onChange={() => setXSol(!xSol)}
            checked={xSol ? true : false}
          ></input>
          <label
            htmlFor="solution"
            className="font-medium text-black dark:text-white"
          >
            {t("category.solution")}
          </label>
        </div>
      </div>
    );
  };
  return (
    <div className="pt-16 md:py-16 px-6 sm:px-8 md:pr-0 md:sticky top-4">
      <div className="hidden md:block">
        <div className="flex gap-2 items-center border-b border-gray-200 dark:border-[#183b61]">
          <FunnelIcon className="h-5 w-5 text-blue-500" />
          <p className="font-medium text-blue-500">Filter</p>
        </div>
        {Options()}
      </div>
      <div className="md:hidden block relative z-10">
        <button
          className="flex justify-between items-center border-b border-gray-200 dark:border-[#183b61] w-full"
          onClick={() => setOpen(!open)}
        >
          <div className="flex gap-2 items-center">
            <FunnelIcon className="h-5 w-5 text-blue-500" />
            <p className="font-medium text-blue-500">Filter</p>
          </div>
          {open ? (
            <ChevronUpIcon className="h-4 w-4 text-blue-500" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 text-blue-500" />
          )}
        </button>
        {open && (
          <div
            className="inset-0 fixed bg-transparent z-0"
            onClick={() => setOpen(!open)}
          ></div>
        )}
        {Options(true)}
      </div>
    </div>
  );
}
