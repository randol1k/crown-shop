import { connect } from "react-redux";
import styles from "./AddedCartItem.module.scss";

import { QtyBtn } from "src/components/UI/QtyBtn";
import {
  ActionTypes,
  addItemQty,
  removeItemQty,
  removeCartItem,
} from "src/features/actions";
import { Dispatch } from "redux";
import { CartReducer } from "src/features/reducers/cart";

interface AppProps {
  name: string;
  quantity: number;
  cart: CartReducer;
  price: number;
  imageUrl: string;
  increaseQty: typeof addItemQty;
  decreaseQty: typeof removeItemQty;
  removeCartItem: typeof removeCartItem;
}

const _AddedCartItem = ({
  cart,
  name,
  quantity,
  price,
  imageUrl,
  increaseQty,
  decreaseQty,
  removeCartItem,
}: AppProps) => {
  const clickHandler = (type: string) => {
    if (type === "add") {
      increaseQty(name);
    } else {
      if (quantity > 1) {
        decreaseQty(name);
      } else {
        removeCartItem(name);
      }
    }

    localStorage.setItem("cartData", JSON.stringify(cart?.addedItems));
  };

  return (
    <div
      className={`${styles.addedCartItem} ${styles.onWidget} ${styles.onCheckoutPage}`}
    >
      <div className={styles.imgContainer}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <QtyBtn btnType="Remove" clickHandler={() => clickHandler("remove")} />
      <div className={styles.textContainer}>
        <p className={styles.itemName}>{name}</p>
        <p>
          {quantity} x $ {price * quantity}
        </p>
      </div>
      <QtyBtn btnType="Add" clickHandler={() => clickHandler("add")} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increaseQty: (itemName: string) =>
      dispatch({
        type: ActionTypes.addItemQty,
        payload: itemName,
      }),
    decreaseQty: (itemName: string) =>
      dispatch({
        type: ActionTypes.removeItemQty,
        payload: itemName,
      }),
    removeCartItem: (itemName: string) =>
      dispatch({
        type: ActionTypes.removeCartItem,
        payload: itemName,
      }),
  };
};

export const AddedCartItem = connect(null, mapDispatchToProps)(_AddedCartItem);
