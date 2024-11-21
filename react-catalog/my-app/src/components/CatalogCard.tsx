import { Product, toDollars } from '../../../lib';

type CatalogCardProps = {
  product: Product;
};

export function CatalogCard({ product }: CatalogCardProps) {
  return (
    <>
      <img src={product.imageUrl}></img>
      <h2>{product.name}</h2>
      <h3>{toDollars(product.price)}</h3>
      <p>{product.shortDescription}</p>
    </>
  );
}
