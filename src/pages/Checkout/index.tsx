import { connect } from "react-redux";
import styles from "./Checkout.module.scss";
import { Dispatch } from "redux";

import { StateStore } from "src/features/reducers";
import { CartReducer } from "src/features/reducers/cart";
import { ActionTypes, CartItem } from "src/features/actions";

import { CheckoutItem } from "src/components/CheckoutItem";
import { Footer } from "src/components/Layout/Footer";
import { Stripe } from "src/components/Stripe";

interface AppProps {
  cart?: CartReducer;
}

const _Checkout = ({ cart }: AppProps) => {
  let totalPrice = 0;

  const footerContent = (
    <>
      <p>
        In order to finish the transaction, please use the following Credit Card
        data:
      </p>
      <p>4242 4242 4242 4242 / 10/23 123</p>
    </>
  );

  const contentToRender = !cart?.addedItems.length ? (
    <p className={styles.emptyCartMessage}>
      Whoops, you haven't added any items yet ;)
    </p>
  ) : (
    <>
      <div className={styles.checkout}>
        <div className={styles.headerContainer}>
          <span className={styles.product}>Product</span>
          <span className={styles.description}>Description</span>
          <span className={styles.quantity}>Quantity</span>
          <span className={styles.price}>Price</span>
          <span className={styles.remove}></span>
        </div>
        <div className={styles.addedItemsContainer}>
          {cart?.addedItems.map(
            ({ name, price, quantity, imageUrl, id }: CartItem) => {
              totalPrice += price * quantity;

              return (
                <CheckoutItem
                  key={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                  imageUrl={imageUrl}
                />
              );
            }
          )}
        </div>

        <p className={styles.total}>TOTAL: {totalPrice}$</p>
        <div className={styles.stripeContainer}>
          <Stripe price={totalPrice} />
        </div>
        <Footer content={footerContent} />
      </div>
    </>
  );

  return contentToRender;
};

const mapStateToProps = ({ cart }: StateStore): {} => {
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

export const Checkout = connect(mapStateToProps, mapDispatchToProps)(_Checkout);
