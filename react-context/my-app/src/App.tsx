import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { useState } from 'react';
import { CartContext } from './components/CartContext';
import { Product } from './lib';

export function App() {
  const [cart, setCart] = useState([] as Product[]);

  function addToCart(product: Product): void {
    setCart((c) => [...c, product]);
  }

  const cartContextValues = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
