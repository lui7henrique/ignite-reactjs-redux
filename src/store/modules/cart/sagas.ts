import { all, takeLatest } from "redux-saga/effects";

const checkProductStock = () => {
  console.log("adicionou kkkk");
};
export default all([takeLatest("ADD_PRODUCT_TO_CART", checkProductStock)]);
