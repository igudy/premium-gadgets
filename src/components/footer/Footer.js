import React from "react";
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className=" hover:underline cursor-pointer">About</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Careers</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Brand Center</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Discord Server</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Twitter</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Facebook</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Licensing</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">iOS</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Android</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">Windows</a>
              </li>
              <li className="mb-4">
                <a className="hover:underline cursor-pointer">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
