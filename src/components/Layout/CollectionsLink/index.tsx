import styles from "./CollectionsLink.module.scss";
import { useHistory } from "react-router";

interface AppProps {
  bgImg: string;
  title: string;
  large?: boolean;
}

export const CollectionsLink = ({ bgImg, title, large }: AppProps) => {
  const history = useHistory();

  const goToCollection = (): void => {
    history.push(`/shop/${title.toLowerCase()}`);
  };

  return (
    <div
      className={`${styles.collectionsLink} ${large ? styles.large : null}`}
      onClick={goToCollection}
    >
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className={styles.textContainer}>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};
