import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function FormContact() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleChangeInput = ({
    fullName,
    email,
    phone,
    message,
  }: {
    fullName?: any;
    email?: any;
    phone?: any;
    message?: any;
  }) => {
    fullName || fullName === ""
      ? setFullName(fullName)
      : email || email === ""
      ? setEmail(email)
      : phone || phone === ""
      ? setPhone(phone)
      : setMessage(message);
  };
  const handleOnClick = async () => {
    try {
      await axios.post(
        "https://api.postmarkapp.com/email",
        {
          From: email,
          To: "hi@omnistack.co",
          Subject: `New message from ${fullName}`,
          TextBody: `Dear team, I am ${fullName} - number phone: ${phone}, ${message}`,
        },
        {
          headers: {
            "X-Postmark-Server-Token": process.env.POSTMARK_API_TOKEN,
          },
        }
      );
      toast.success(t("toast.sendEmailSuccess"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-y-6">
      <div>
        <label htmlFor="full-name" className="sr-only">
          {t("contact.fullname")}
        </label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="name"
          className="block w-full rounded-xl bg-gray bg-gray-400/10 border-gray-300 dark:border-[#1e4976] py-3 px-4 placeholder-gray-500 shadow-sm focus:ring-0 outline-none dark:bg-[#005eff]/20 text-gray-500 dark:text-white"
          placeholder={`${t("contact.fullname")}`}
          value={fullName}
          onChange={(e) => handleChangeInput({ fullName: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full rounded-xl bg-gray bg-gray-400/10 border-gray-300 dark:border-[#1e4976] py-3 px-4 placeholder-gray-500 shadow-sm focus:ring-0 outline-none dark:bg-[#005eff]/20 text-gray-500 dark:text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => handleChangeInput({ email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          {t("contact.phone")}
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          typeof="numberic"
          autoComplete="tel"
          value={phone}
          className="block w-full rounded-xl bg-gray bg-gray-400/10 border-gray-300 dark:border-[#1e4976] py-3 px-4 placeholder-gray-500 shadow-sm focus:ring-0 outline-none dark:bg-[#005eff]/20 text-gray-500 dark:text-white"
          placeholder={`${t("contact.phone")}`}
          onChange={(e) => handleChangeInput({ phone: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          {t("contact.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full rounded-xl bg-gray bg-gray-400/10 border-gray-300 dark:border-[#1e4976] py-3 px-4 placeholder-gray-500 shadow-sm focus:ring-0 outline-none dark:bg-[#005eff]/20 text-gray-500 dark:text-white"
          placeholder={`${t("contact.message")}`}
          value={message}
          onChange={(e) => handleChangeInput({ message: e.target.value })}
        />
      </div>
      <div>
        <button
          type="button"
          className="inline-flex justify-center rounded-xl border border-transparent bg-blue-500 py-3 px-8 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => handleOnClick()}
        >
          {t("contact.submit")}
        </button>
      </div>
    </div>
  );
}
