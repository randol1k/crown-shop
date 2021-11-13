import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Dispatch } from "redux";
import { ActionTypes, setCart } from "src/features/actions";

interface AppProps {
  price: number;
  setCart: typeof setCart;
}

export const _Stripe = ({ price, setCart }: AppProps) => {
  const onToken = () => {
    localStorage.setItem("cartData", JSON.stringify([]));
    setCart([]);
    alert("Payment successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={price * 100}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={
        process.env.REACT_APP_STRIPE_KEY ? process.env.REACT_APP_STRIPE_KEY : ""
      }
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCart: () =>
      dispatch({
        type: ActionTypes.setCart,
        payload: [],
      }),
  };
};

export const Stripe = connect(null, mapDispatchToProps)(_Stripe);
