import React from 'react';
import CartList from '@/components/CartList';
import { Books } from 'src/contents/Books.content';

const cart = () => {
  return (
    <div className='container mx-auto'>
      <CartList books={Books} />
    </div>
  );
};

export default cart;
