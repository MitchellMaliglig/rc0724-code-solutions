import { createContext } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext<CartValue>(defaultCartValue);
