import React from "react";
import "./Slider.scss";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Slider = () => {
  // Language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <div className="slider">
      <div className="arrow-prev"></div>
      <div className="arrow-next"></div>
      <div className="slide current">
        <img src="https://i.ibb.co/H2FRmtV/bg-3.jpg" alt="gadgets" />
        <div className="content">
          <h2>{t("welcome")}</h2>
          <p>{t("upto-30%")}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Slider;
