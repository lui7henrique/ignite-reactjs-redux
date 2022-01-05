import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { IState } from "../..";

import {
  addProductToCardRequest,
  addProductToCardSuccess,
  addProductToCardFail,
} from "./action";

import api from "../../../services/api";

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({
  payload,
}: ReturnType<typeof addProductToCardRequest>) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCardSuccess(product));
  } else {
    yield put(addProductToCardFail(product.id));
  }

  console.log(availableStockResponse);

  console.log(currentQuantity);
}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
