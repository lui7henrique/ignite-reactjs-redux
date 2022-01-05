import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { IProduct } from "../store/modules/cart/types";
import api from "../services/api";
import { addProductToCard } from "../store/modules/cart/action";

export const Catalog = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await api.get("products");
      const { data } = response as { data: IProduct[] };

      setCatalog(data);
    };

    fetchData();
  }, []);

  const handleAddProductToCard = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCard(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Catalog</h1>
      <ul>
        {catalog.map((product) => {
          return (
            <article key={product.id}>
              <strong>{product.title}</strong> {" -"}
              <span>{product.price}</span>
              {"    "}
              <button
                type="button"
                onClick={() => handleAddProductToCard(product)}
              >
                Comprar
              </button>
            </article>
          );
        })}
      </ul>
    </main>
  );
};
