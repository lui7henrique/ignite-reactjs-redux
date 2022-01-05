import { AxiosResponse } from "axios";
import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga() {
  const response: AxiosResponse | undefined = yield all([cart]);

  return response;
}
