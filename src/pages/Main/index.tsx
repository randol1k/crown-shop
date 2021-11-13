import { useEffect } from "react";
import styles from "./Main.module.scss";
import { connect } from "react-redux";
import { ActionTypes, Link } from "src/features/actions";
import { StateStore } from "src/features/reducers";
import { Dispatch } from "redux";
import { StoreReducer } from "src/features/reducers/store";

import { CollectionsLink } from "src/components/Layout/CollectionsLink";

interface AppProps {
  store: StoreReducer;
  fetchLinks: Function;
}

export const _Main = ({ store, fetchLinks }: AppProps) => {
  useEffect(() => {
    if (store.links.length === 0) {
      fetchLinks();
    }
    // eslint-disable-next-line
  }, []);

  // console.log(cart.addedItems.length);

  return (
    <div className={styles.main}>
      {store.links.map(({ id, ...otherProps }: Link) => (
        <CollectionsLink key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ store }: StateStore): {} => {
  return {
    store,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchLinks: () =>
      dispatch({
        type: ActionTypes.fetchStoreDataAsync,
      }),
  };
};

export const Main = connect(mapStateToProps, mapDispatchToProps)(_Main);
