import styles from "./QtyBtn.module.scss";
import iconMinus from "src/assets/minus.svg";
import iconPlus from "src/assets/plus.svg";
import { MouseEventHandler } from "react";

interface AppProps {
  btnType: string;
  clickHandler: MouseEventHandler;
}

const _QtyBtn = ({ btnType, clickHandler }: AppProps) => {
  return (
    <img
      src={btnType === "Add" ? iconPlus : iconMinus}
      alt={btnType}
      className={styles.qtyBtn}
      onClick={clickHandler}
    />
  );
};

export const QtyBtn = _QtyBtn;
