import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCardRequest } from "../store/modules/cart/action";
import { IProduct } from "../store/modules/cart/types";

interface ICatalogItemProps {
  product: IProduct;
}
export const CatalogItem = ({ product }: ICatalogItemProps) => {
  const dispatch = useDispatch();

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
      {"    "}
      <button type="button" onClick={() => handleAddProductToCard(product)}>
        Comprar
      </button>
    </article>
  );
};
