export interface IProduct {
  id: number;
  name: string;
  price: number;
}
export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface ICartState {
  items: ICartItem[];
}
