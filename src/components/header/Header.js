import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// Authentication
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/slice/authSlice";
// ShowOnLogin and ShowOnLogout
import ShowOnLogin, { ShowOnLogout } from "../hiddenLinks/hiddenLinks";
// Show admin if admin is logged in
import AdminOnlyroute, {
  AdminOnlyLink,
} from "../adminOnlyRoute/AdminOnlyroute";
import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Premium<span>Gadgets</span>.
      </h2>
    </Link>
  </div>
);

const Header = () => {
  // Navigate
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  // Language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY);
  }, []);

  const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        <FaShoppingCart size={20} />
        <p className="p-cart">{cartTotalQuantity}</p>
      </Link>
    </span>
  );

  // Dispatching redux action
  const dispatch = useDispatch();

  const fixNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixNavbar);

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles.header}>
        {logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>

            <AdminOnlyLink>
              <li>
                <button className="--btn --btn-primary">
                  <NavLink to="/admin/home">{t("admin")}</NavLink>
                </button>
              </li>
            </AdminOnlyLink>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <div className="text-white">
              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>
                  {t("login")}
                </NavLink>
              </ShowOnLogout>
            </div>
            <div>
              <a href="#home" className="flex">
                <FaUserCircle size={16} />
                {displayName}
              </a>
            </div>
            <div className="">
              <NavLink to="/">{t("home")}</NavLink>
            </div>
            <div>
              <Link to="/contact">{t("contact-us")}</Link>
            </div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hausa">Hausa</option>
                <option value="igbo">Igbo</option>
                <option value="yoruba">Yoruba</option>
              </select>
            </div>
            <div>
              <NavLink to="/order-history" className={activeLink}>
                {t("orders")}
              </NavLink>
            </div>
            <div>
              <ShowOnLogin>
                <NavLink to="/" onClick={logoutUser}>
                  Logout
                </NavLink>
              </ShowOnLogin>
            </div>
            {cart}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
export default Header;
