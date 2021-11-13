import { ActionTypes, Actions, Link, Collection } from "../actions";

export interface StoreReducer {
  links: Link[];
  collections: Collection[];
}

const initialState = {
  links: [],
  collections: [],
};

export const storeReducer = (
  state: StoreReducer = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.fetchLinks:
      return { ...state, links: action.payload };
    case ActionTypes.fetchCollections:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};
