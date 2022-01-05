import { useEffect, useState } from "react";
import { IProduct } from "../store/modules/cart/types";
import api from "../services/api";
import { CatalogItem } from "./CatalogItem";

export const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await api.get("products");
      const { data } = response as { data: IProduct[] };

      setCatalog(data);
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      <ul>
        {catalog.map((product) => {
          return <CatalogItem product={product} />;
        })}
      </ul>
    </main>
  );
};
