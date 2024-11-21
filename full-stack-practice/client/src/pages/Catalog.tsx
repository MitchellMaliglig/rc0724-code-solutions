import { useEffect, useState } from 'react';
import { readCatalog, type Product } from '../../../lib';
import { CatalogCard } from '../components/CatalogCard';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        setProducts(await readCatalog());
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
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
      <h1>Catalog</h1>
      <div className="row">
        {products.map((product) => (
          <Link
            to={`details/${product.productId}`}
            className="card"
            key={product.productId}>
            {<CatalogCard product={product} />}
          </Link>
        ))}
      </div>
    </>
  );
}
