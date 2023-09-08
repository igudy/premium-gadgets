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
        {/* <img src="https://unsplash.com/photos/9jLI9Ux6IFo" alt="gadgets" /> */}
        <div className="content">
          <h2>{t("welcome")}</h2>
          <p>{t("upto-30%")}</p>
          <hr />
          <div className="language-background">
            <div className="language">
              {/* <div>
                <p onClick={() => changeLanguage("en")}>English</p>
              </div> */}
              <p onClick={() => changeLanguage("hausa")}>Hausa</p>
              <p onClick={() => changeLanguage("igbo")}>Igbo</p>
              <p onClick={() => changeLanguage("yoruba")}>Yoruba</p>
            </div>
          </div>

          {/* End of internalization */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
