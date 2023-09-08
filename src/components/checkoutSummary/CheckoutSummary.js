import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";
import Card from "../cards/Card";
import styles from "./CheckoutSummary.module.scss";

import { useTranslation } from "react-i18next";

const CheckoutSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const { t } = useTranslation();

  return (
    <div>
      <h3>{t("checkout-summary")}</h3>
      <div>
        {cartItems.lenght === 0 ? (
          <>
            <p>{t("no-item")}</p>
            <button className="--btn">
              <Link to="/#products">{t("back-shop")}</Link>
            </button>
          </>
        ) : (
          <div>
            <p>
              <b>{`Cart item(s): ${cartTotalQuantity}`}</b>
            </p>
            <div className={styles.text}>
              <h4>{t("subtotal")}:</h4>
              <h3>{cartTotalAmount.toFixed(2)}</h3>
            </div>
            {cartItems.map((item, index) => {
              const { id, name, price, cartQuantity } = item;
              return (
                <Card key={id} cardClass={styles.card}>
                  <h4>
                    {t("product")}: {name}
                  </h4>
                  <p>
                    {t("quantity")}: {cartQuantity}
                  </p>
                  <p>
                    {t("unit-price")}: {price}
                  </p>
                  <p>
                    {t("set-price")}: {price * cartQuantity}
                  </p>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSummary;
