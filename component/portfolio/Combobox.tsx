import { FunnelIcon } from "@heroicons/react/24/outline";
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
  return (
    <div className="pt-16 md:py-16 px-6 sm:px-8 md:pr-0 sticky top-4">
      <div className="flex gap-2 items-center border-b border-gray-200 dark:border-[#183b61]">
        <FunnelIcon className="h-5 w-5 text-blue-500" />
        <p className="font-medium text-blue-500">Filter</p>
      </div>
      <div className="flex md:block gap-8 pt-2 md:pt-0">
        <div className="flex gap-2 md:pt-4">
          <input
            id="website"
            aria-describedby="website-description"
            name="website"
            type="checkbox"
            className="h-4 w-4 rounded-md focus:[--tw-ring-offset-width:0px] focus:ring-0 border border-gray-300 outline-none bg-transparent dark:border-[#183b61] mt-[5px]"
            onChange={() => setXWeb(!xWeb)}
          />
          <label
            htmlFor="website"
            className="font-medium text-black dark:text-white"
          >
            {t("category.website")}
          </label>
        </div>
        <div className="flex gap-2 md:pt-2">
          <input
            id="website"
            aria-describedby="website-description"
            name="website"
            type="checkbox"
            className="h-4 w-4 rounded-md focus:[--tw-ring-offset-width:0px] focus:ring-0 border border-gray-300 outline-none bg-transparent dark:border-[#183b61] mt-[5px]"
            onChange={() => setXMob(!xMob)}
          />
          <label
            htmlFor="website"
            className="font-medium text-black dark:text-white"
          >
            {t("category.mobile")}
          </label>
        </div>
        <div className="flex gap-2 md:pt-2">
          <input
            id="website"
            aria-describedby="website-description"
            name="website"
            type="checkbox"
            className="h-4 w-4 rounded-md focus:[--tw-ring-offset-width:0px] focus:ring-0 border border-gray-300 outline-none bg-transparent dark:border-[#183b61] mt-[5px]"
            onChange={() => setXSol(!xSol)}
          />
          <label
            htmlFor="website"
            className="font-medium text-black dark:text-white"
          >
            {t("category.solution")}
          </label>
        </div>
      </div>
    </div>
  );
}
