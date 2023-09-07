import React, { useState } from "react";
import styles from "./auth.module.scss";
import RegisterImg from "../../assests/register.png";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/cards/Card";

// React toastify for notification
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Creating users
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Loader from "../../components/loader/Loader";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();

  // Navigation
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Registration successful");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>{t("register")}</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder={t("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder={t("password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder={t("confirm-password")}
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
              />
              <button className="--btn --btn-primary --btn-block">
                {t("register")}
              </button>
            </form>
            <span className={styles.register}>
              <p>A{t("already-account")}</p>
              <Link to="/login" className="login-right">
                {t("login")}
              </Link>
            </span>
          </div>
        </Card>

        <div className={styles.img}>
          <img src={RegisterImg} alt="login" width="400" />
        </div>
      </section>
    </>
  );
};

export default Register;
