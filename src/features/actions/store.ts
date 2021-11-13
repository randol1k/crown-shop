import { ActionTypes } from ".";

export interface Link {
  id: number;
  bgImg: string;
  title: string;
  large?: boolean;
}

export interface Collection {
  items: [{ id: number; imageUrl: string; name: string; price: number }];
  title: string;
}

export interface FetchLinks {
  type: ActionTypes.fetchLinks;
  payload: Link[];
}

export interface FetchCollections {
  type: ActionTypes.fetchCollections;
  payload: Collection[];
}
