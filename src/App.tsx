import { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { Header } from "src/components/Layout/Header";
import { Main } from "src/pages/Main";
import { Shop } from "src/pages/Shop";
import { Checkout } from "src/pages/Checkout";
import { Contacts } from "src/pages/Contacts";
import { Dispatch } from "redux";
import { ActionTypes, CartItem, setCart } from "./features/actions";
import { StateStore } from "./features/reducers/";
import { CartReducer } from "src/features/reducers/cart";

interface AppProps {
  cart?: CartReducer;
  setCart: typeof setCart;
}

function _App({ setCart, cart }: AppProps) {
  useEffect(() => {
    const savedData = localStorage.getItem("cartData");
    if (savedData) {
      const cartData = JSON.parse(savedData);
      setCart(cartData);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart?.addedItems));
  }, [cart?.addedItems]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop/:collection" component={Shop} />
        <Route path="/shop/" component={Shop} />
        <Route path="/checkout/" component={Checkout} />
        <Route path="/contacts/" component={Contacts} />
        <Route path="/" exact component={Main} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ cart }: StateStore) => {
  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCart: (cartItems: CartItem[]) =>
      dispatch({
        type: ActionTypes.setCart,
        payload: cartItems,
      }),
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
