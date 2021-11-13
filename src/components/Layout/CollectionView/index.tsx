import styles from "./CollectionView.module.scss";
import { connect } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router";
import { Params } from "src/pages/Shop";
import { StateStore } from "src/features/reducers";

import { Card } from "src/components/Card";
import { CartReducer } from "src/features/reducers/cart";

interface AppProps {
  items: [
    {
      id: number;
      name: string;
      price: number;
      imageUrl: string;
    }
  ];
  title: string;
  preview?: boolean;
  cart?: CartReducer;
}

const _CollectionView = ({ items, title, preview, cart }: AppProps) => {
  const itemsPerPage = preview ? 4 : items.length;
  const location = useLocation();
  const history = useHistory();
  const params: Params = useParams();

  const goToCollection = (): void => {
    if (!params.collection) {
      history.push(`${location.pathname}/${title.toLowerCase()}`);
    } else {
      history.push(`/shop`);
    }
  };

  return (
    <div className={styles.collectionView}>
      <h3 onClick={goToCollection}>{title}</h3>
      <div
        className={`${styles.collectionContainer} ${
          !preview ? styles.fullCollection : null
        }`}
      >
        {items.slice(0, itemsPerPage).map(({ id, ...otherProps }) => (
          <Card key={id} {...otherProps} preview={preview} cart={cart} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }: StateStore): {} => {
  return {
    cart,
  };
};

export const CollectionView = connect(mapStateToProps)(_CollectionView);
