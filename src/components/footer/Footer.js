import React from "react";
import { useTranslation } from "react-i18next"; // Assuming you are using react-i18next for translation

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("company")}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("about")}</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("careers")}</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">
                  {t("brand-center")}
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("blog")}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("help center")}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">
                  {t("discord-server")}
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("twitter")}</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">
                  {t("facebook")}
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">
                  {t("contact-us")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("legal")}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">
                  {t("privacy-policy")}
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">
                  {t("licensing")}
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("terms")}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("download")}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("ios")}</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("android")}</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("windows")}</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">{t("macos")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
