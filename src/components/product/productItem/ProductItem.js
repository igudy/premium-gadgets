import React from "react";
import { Link } from "react-router-dom";
import Card from "../../cards/Card";
import styles from "./ProductItem.module.scss";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
} from "../../../redux/slice/cartSlice";
import { useTranslation } from "react-i18next";

const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {
  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  const { t } = useTranslation();

  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`₦${price}`}</p>
          <h4>{shortenText(name, 18)}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenText(desc, 300)}</p>}
        <button
          className="--btn --btn-danger"
          onClick={() => addToCart(product)}
        >
          {t("add-to-cart")}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
