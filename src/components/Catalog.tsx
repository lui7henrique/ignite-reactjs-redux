import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IProduct } from "../store/modules/cart/types";
import api from "../services/api";

export const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await api.get("products");
      const { data } = response as { data: IProduct[] };

      console.log(data);

      setCatalog(data);
    };

    fetchData();
  }, []);

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
              <button type="button">Comprar</button>
            </article>
          );
        })}
      </ul>
    </main>
  );
};
