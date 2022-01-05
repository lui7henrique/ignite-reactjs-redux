import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga() {
  const response: unknown = yield all([cart]);

  return response;
}
