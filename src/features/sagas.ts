import { put, takeLeading, all } from "redux-saga/effects";
import { fsFetchCollections, fsFetchLinks } from "src/firebase";
import { Link, ActionTypes, Collection } from "src/features/actions";

export function* fetchLinksAsync() {
  const data: Link[] = yield fsFetchLinks();

  yield put({
    type: ActionTypes.fetchLinks,
    payload: data,
  });
}

export function* fetchCollectionsAsync() {
  const data: Collection[] = yield fsFetchCollections();

  yield put({
    type: ActionTypes.fetchCollections,
    payload: data,
  });
}

export function* watchFetchStoreData() {
  yield takeLeading(ActionTypes.fetchStoreDataAsync, fetchLinksAsync);
}

export function* watchFetchCollectionsAsync() {
  yield takeLeading(ActionTypes.fetchCollectionsAsync, fetchCollectionsAsync);
}

export function* rootSaga() {
  yield all([watchFetchStoreData(), watchFetchCollectionsAsync()]);
}
