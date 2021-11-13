import styles from "./Card.module.scss";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import {
  ActionTypes,
  addCartItem,
  CartItem,
  removeCartItem,
} from "src/features/actions";

import { AddToCartBtn } from "src/components/UI/AddToCartBtn";
import { CartReducer } from "src/features/reducers/cart";

interface AppProps {
  name: string;
  imageUrl: string;
  price: number;
  preview?: boolean;
  addCartItem: typeof addCartItem;
  removeCartItem: typeof removeCartItem;
  cart?: CartReducer;
}

const _Card = ({
  name,
  price,
  imageUrl,
  preview,
  addCartItem,
  removeCartItem,
  cart,
}: AppProps) => {
  const item = {
    name,
    price,
    id: Math.random(),
    imageUrl,
    quantity: 1,
  };

  const isAddedToCart =
    cart?.addedItems.filter((item: CartItem) => item.name === name).length !==
    0;

  const buttonClickHandler = () => {
    if (!isAddedToCart) {
      addCartItem(item);
    } else {
      removeCartItem(item.name);
    }
  };

  return (
    <div
      className={`${styles.card} ${!preview ? styles.fullCollection : null}`}
    >
      <div className={styles.imgContainer}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <AddToCartBtn
          onClick={buttonClickHandler}
          isAddedToCart={isAddedToCart}
        />
      </div>
      <div className={styles.cardInfo}>
        <p>{name}</p>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCartItem: (item: CartItem) =>
      dispatch({
        type: ActionTypes.addCartItem,
        payload: item,
      }),
    removeCartItem: (itemName: string) =>
      dispatch({
        type: ActionTypes.removeCartItem,
        payload: itemName,
      }),
  };
};

export const Card = connect(null, mapDispatchToProps)(_Card);
