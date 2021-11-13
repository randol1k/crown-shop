import styles from "./Shop.module.scss";
import { connect } from "react-redux";
import { StoreReducer } from "src/features/reducers/store";
import { StateStore } from "src/features/reducers";
import { ActionTypes, Collection } from "src/features/actions";
import { useParams } from "react-router";

import { CollectionView } from "src/components/Layout/CollectionView";
import { Dispatch } from "redux";
import { useEffect } from "react";

interface AppProps {
  store: StoreReducer;
  fetchCollections: Function;
}

export interface Params {
  collection: string | undefined;
}

const _Shop = ({ store, fetchCollections }: AppProps) => {
  const params: Params = useParams();

  useEffect(() => {
    if (store.collections.length === 0) {
      fetchCollections();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.shop}>
      {store.collections.map(({ items, title }: Collection) => {
        if (params.collection?.toLowerCase() === title.toLowerCase()) {
          return (
            <CollectionView
              key={title}
              items={items}
              title={title}
              preview={false}
            />
          );
        } else if (!params.collection) {
          return (
            <CollectionView
              key={title}
              items={items}
              title={title}
              preview={true}
            />
          );
        }
        return null;
      })}
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
    fetchCollections: () =>
      dispatch({
        type: ActionTypes.fetchCollectionsAsync,
      }),
  };
};

export const Shop = connect(mapStateToProps, mapDispatchToProps)(_Shop);
