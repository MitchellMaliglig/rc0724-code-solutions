import { type Product } from './data';

export async function readCatalog(): Promise<Product[]> {
  // return Promise.resolve(products);
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return (await response.json()) as Product[];
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  // return Promise.resolve(products.find((p) => p.productId === productId));
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return (await response.json()) as Product;
}
