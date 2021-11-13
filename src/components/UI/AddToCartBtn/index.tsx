import { MouseEventHandler } from "react";
import { connect } from "react-redux";
import styles from "./AddButton.module.scss";

interface AppProps {
  onClick: MouseEventHandler;
  isAddedToCart: boolean;
}

const _AddToCartBtn = ({ onClick, isAddedToCart }: AppProps) => {
  return (
    <button
      className={`${styles.addBtn} ${
        isAddedToCart ? styles.addedToCart : null
      }`}
      onClick={onClick}
    >
      {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export const AddToCartBtn = connect()(_AddToCartBtn);
