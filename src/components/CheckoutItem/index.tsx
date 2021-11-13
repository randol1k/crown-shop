import { Dispatch } from "redux";
import { connect } from "react-redux";
import styles from "./CheckoutItem.module.scss";

import iconCloseCart from "src/assets/iconCloseCart.svg";

import {
  addItemQty,
  removeItemQty,
  removeCartItem,
  ActionTypes,
} from "src/features/actions";

import { QtyBtn } from "src/components/UI/QtyBtn";
import { CartReducer } from "src/features/reducers/cart";
import { StateStore } from "src/features/reducers";

interface AppProps {
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
  cart: CartReducer;
  addItemQty: typeof addItemQty;
  removeItemQty: typeof removeItemQty;
  removeCartItem: typeof removeCartItem;
}

const _CheckoutItem = ({
  name,
  imageUrl,
  quantity,
  price,
  addItemQty,
  removeItemQty,
  removeCartItem,
  cart,
}: AppProps) => {
  const qtyClickHandler = (type: string) => {
    if (type === "remove") {
      removeItemQty(name);

      if (quantity <= 1) {
        removeCartItem(name);
      }
    } else {
      addItemQty(name);
    }

    localStorage.setItem("cartData", JSON.stringify(cart?.addedItems));
  };

  const removeItemHandler = () => {
    removeCartItem(name);
  };

  return (
    <div className={styles.checkoutItemContainer}>
      <div className={styles.imgContainer}>
        <div
          className={styles.productImg}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <span className={styles.descriptionContainer}>{name}</span>
      <span className={styles.qtyContainer}>
        <QtyBtn
          btnType="Remove"
          clickHandler={() => qtyClickHandler("remove")}
        />
        {quantity}
        <QtyBtn btnType="Add" clickHandler={() => qtyClickHandler("add")} />
      </span>
      <span className={styles.priceContainer}>{price * quantity}</span>
      <span className={styles.removeBtnContainer}>
        <img
          onClick={removeItemHandler}
          src={iconCloseCart}
          alt="Remove item"
          className={styles.removeItem}
        />
      </span>
    </div>
  );
};

const mapStateToProps = ({ cart }: StateStore) => {
  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addItemQty: (itemName: string) =>
      dispatch({
        type: ActionTypes.addItemQty,
        payload: itemName,
      }),
    removeItemQty: (itemName: string) =>
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

export const CheckoutItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CheckoutItem);
