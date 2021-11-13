import styles from "./CloseCartBtn.module.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ActionTypes, setIsCartShown } from "src/features/actions";

import iconCloseCart from "src/assets/iconCloseCart.svg";

interface AppProps {
  setIsCartShown: typeof setIsCartShown;
}

const _CloseCartBtn = ({ setIsCartShown }: AppProps) => {
  const onIconClick = () => {
    setIsCartShown(false);
  };

  return (
    <img
      src={iconCloseCart}
      alt="Close Cart"
      className={styles.closeCartBtn}
      onClick={onIconClick}
    />
  );
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

export const CloseCartBtn = connect(null, mapDispatchToProps)(_CloseCartBtn);
