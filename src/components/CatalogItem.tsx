import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCardRequest } from "../store/modules/cart/action";
import { IProduct } from "../store/modules/cart/types";

interface ICatalogItemProps {
  product: IProduct;
}
export const CatalogItem = ({ product }: ICatalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCard = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCardRequest(product));
    },
    [dispatch]
  );

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" -"}
      <span>{product.price}</span>
      {"      "}
      <button
        type="button"
        onClick={() => handleAddProductToCard(product)}
        disabled={hasFailedStockCheck}
      >
        Comprar
      </button>
      {"      "}
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>Falta de stoque</span>
      )}
    </article>
  );
};
