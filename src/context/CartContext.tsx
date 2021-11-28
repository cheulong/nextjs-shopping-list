import { createContext } from 'react';
import { CartItem } from 'src/types/CartItem.type';

export const CartContext = createContext<{
  value: CartItem[];
  setValue: Function;
}>({ value: [], setValue: () => {} });
