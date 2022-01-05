import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export default function* rootSaga() {
  const response: unknown = yield all([cart]);

  return response;
}
