import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import iconLogo from "src/assets/iconLogo.svg";
import iconCart from "src/assets/iconCart.svg";
import { StateStore } from "src/features/reducers";

import { Cart } from "src/components/Cart";
import { CartReducer } from "src/features/reducers/cart";
import { Dispatch } from "redux";
import { ActionTypes, setIsCartShown } from "src/features/actions";
import { useEffect } from "react";

interface AppProps {
  cart?: CartReducer;
  setIsCartShown: typeof setIsCartShown;
}

const _Header = ({ cart, setIsCartShown }: AppProps) => {
  const location = useLocation();
  const totalQuantity = cart?.addedItems.length;
  const isThisCheckoutPage = location.pathname.includes("checkout");

  useEffect(() => {
    if (isThisCheckoutPage) {
      setIsCartShown(false);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const toggleCartWidget = () => {
    if (cart?.isCartShown) {
      setIsCartShown(false);
    } else {
      setIsCartShown(true);
    }
  };

  const cartWidget = isThisCheckoutPage ? (
    <div style={{ width: "0.6rem" }} />
  ) : (
    <span className={styles.navCart} onClick={toggleCartWidget}>
      <p>{totalQuantity}</p>
      <img src={iconCart} alt="Cart Icon" />
    </span>
  );

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={iconLogo} alt="Logo" />
      </Link>
      <div className={styles.nav}>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Cart</Link>
        <Link to="/contacts">Contacts</Link>
        {cartWidget}

        {cart?.isCartShown ? (
          <div className={styles.cartWidgetContainer}>
            <Cart />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }: StateStore): {} => {
  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setIsCartShown: (newCartState: boolean) =>
      dispatch({
        type: ActionTypes.setIsCartShown,
        payload: newCartState,
      }),
  };
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);
