import { useRef } from "react";
import Card from "../../components/cards/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();

  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_9103mpf",
        form.current,
        "HH9WM6g8bCsZSVgWM"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>{t("contact-us")}</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>{t("name")}</label>
              <input type="text" name="user_name" placeholder="" required />
              <label>{t("email")}</label>
              <input type="email" name="user_email" placeholder="" required />
              <label>{t("subject")}</label>
              <input type="text" name="subject" placeholder="" required />
              <label>{t("message")}</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">
                {t("send-message")}
              </button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>{t("contactUs")}</h3>
              <p>{t("contactus-fill")}</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>{t("number")}</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>{t("email")}</p>
                </span>
                <span>
                  <GoLocation />
                  <p>{t("country")}</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@Twitter</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
