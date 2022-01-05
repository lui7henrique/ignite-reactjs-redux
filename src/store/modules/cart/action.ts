import { IProduct } from "./types";

export const addProductToCardRequest = (product: IProduct) => {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product,
    },
  };
};

export const addProductToCardSuccess = (product: IProduct) => {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product,
    },
  };
};

export const addProductToCardFail = (productId: IProduct["id"]) => {
  return {
    type: "ADD_PRODUCT_TO_CART_FAIL",
    payload: {
      productId,
    },
  };
};
