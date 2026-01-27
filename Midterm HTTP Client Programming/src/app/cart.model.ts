export interface CartResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export interface Cart {
  id: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
