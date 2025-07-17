export interface Order {
  id: string;
  client: {
    name: string;
    email: string;
    address: string;
  };
  products: { productId: string; quantity: number }[];
}
