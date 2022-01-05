import { ActionTypes, IProduct } from "./types";

export const addProductToCardRequest = (product: IProduct) => {
  return {
    type: ActionTypes.addProductToCardRequest,
    payload: {
      product,
    },
  };
};

export const addProductToCardSuccess = (product: IProduct) => {
  return {
    type: ActionTypes.addProductToCardSuccess,
    payload: {
      product,
    },
  };
};

export const addProductToCardFail = (productId: IProduct["id"]) => {
  return {
    type: ActionTypes.addProductToCardFail,
    payload: {
      productId,
    },
  };
};
