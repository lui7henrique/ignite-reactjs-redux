import { Reducer } from "redux";
import produce from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART_SUCCESS": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({ product, quantity: 1 });
        }

        break;
      }
      case "ADD_PRODUCT_TO_CART_FAIL": {
        const { productId } = action.payload;
        alert(`Produto ${productId} não está mais disponível`);

        break;
      }

      default: {
        return state;
      }
    }
  });
};
