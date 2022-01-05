export enum ActionTypes {
  addProductToCardRequest = "ADD_PRODUCT_TO_CART_REQUEST",
  addProductToCardSuccess = "ADD_PRODUCT_TO_CART_SUCCESS",
  addProductToCardFail = "ADD_PRODUCT_TO_CART_FAIL",
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}
export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
