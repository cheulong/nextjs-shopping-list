import React from 'react';
import { CartContext } from 'src/context/CartContext';

const usePrice = () => {
  const { value } = React.useContext(CartContext);

  const getTotalPrice = () => {
    return value.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };
  return { getTotalPrice };
};

export default usePrice;
