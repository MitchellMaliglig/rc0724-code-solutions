import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product, readProduct, toDollars } from '../../../lib';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const { productId } = useParams();

  useEffect(() => {
    async function loadProduct() {
      try {
        setProduct(await readProduct(Number(productId)));
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, []);

  if (isLoading) {
    return <p>Loading Pizza Time...</p>;
  }

  if (error) {
    return (
      <p>
        Error! {error instanceof Error ? error.message : 'Unknown Pizza Error'}
      </p>
    );
  }

  return (
    <>
      <div className="back">
        <Link to="/">&lt; Back to Catalog</Link>
      </div>
      <div className="flex-direction-row">
        <div className="column-half">
          <img src={product?.imageUrl}></img>
        </div>
        <div className="column-half">
          <h2>{product?.name}</h2>
          <h3>{toDollars(product?.price as number)}</h3>
          <p>{product?.shortDescription}</p>
        </div>
      </div>
      <p>{product?.longDescription}</p>
      <button
        type="button"
        onClick={() => alert(`Added ${product?.name} to cart`)}>
        Add to Cart
      </button>
    </>
  );
}
