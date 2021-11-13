import styles from "./Cart.module.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { CloseCartBtn } from "../UI/CloseCartBtn";
import { CartItem } from "src/features/actions";
import { StateStore } from "src/features/reducers";
import { CartReducer } from "src/features/reducers/cart";
import { AddedCartItem } from "./AddedCartItem";

interface AppProps {
  cart?: CartReducer;
}

const _Cart = ({ cart }: AppProps) => {
  let cartComponentToRender =
    cart?.addedItems.length !== 0 ? (
      <>
        {cart?.addedItems.map(
          ({ id, name, imageUrl, price, quantity }: CartItem) => {
            return (
              <AddedCartItem
                key={id}
                name={name}
                imageUrl={imageUrl}
                quantity={quantity}
                price={price}
                cart={cart}
              />
            );
          }
        )}
        <Link to="/checkout">Proceed to Checkout</Link>
      </>
    ) : (
      <p className={styles.emptyCartMessage}>You haven't added any items :)</p>
    );

  return (
    <div className={styles.cart}>
      <CloseCartBtn />
      {cartComponentToRender}
    </div>
  );
};

const mapStateToProps = ({ cart }: StateStore): {} => {
  return {
    cart,
  };
};

export const Cart = connect(mapStateToProps)(_Cart);
