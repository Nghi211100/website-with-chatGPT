import { useTranslation } from "react-i18next";
import FormContact from "../contact/FormContact";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="relative py-16 sm:px-8 px-5 max-w-[1200px] mx-auto">
      <p className="text-3xl lg:text-4xl font-bold pb-6 dark:text-white">
        {t("contact.title")}
      </p>
      <div className="relative mx-auto lg:grid lg:grid-cols-5 shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c] rounded-xl overflow-hidden">
        <div className="bg-white dark:bg-[#005eff]/10 p-6 lg:col-span-2">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <FormContact />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="mx-auto w-full h-80 lg:h-full p-6 bg-white dark:bg-[#005eff]/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2865708020836!2d106.69788995088277!3d10.789349661866394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b555c872a7%3A0xd4c90543ff33dc01!2zNTYgTmd1eeG7hW4gxJDDrG5oIENoaeG7g3UsIMSQYSBLYW8sIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676015715105!5m2!1svi!2s"
              className="border dark:border-[#1e4976] w-full h-full"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
