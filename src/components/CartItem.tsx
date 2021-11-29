import React from 'react';
import { CartContext } from 'src/context/CartContext';
import { CartItem as CartItemType } from 'src/types/CartItem.type';
import Button from './button/Button';
import useItem from 'src/hooks/useItem';

interface CartItemProps {
  items: CartItemType[];
}

const CartItem = ({ items }: CartItemProps) => {
  const { onRemoveFromCart, changeQuantity } = useItem();

  return (
    <>
      {items.map((item) => (
        <tr key={item.id}>
          <td className={'w-2/5 border px-8 py-4'}>{item.title}</td>
          <td className={'w-1/5 border px-8 py-4 leading-none'}>
            <input
              className={'border-2 border-gray-200 w-full'}
              value={item.quantity}
              type='number'
              onChange={(e) => {
                changeQuantity(item.id, e);
              }}
            />{' '}
          </td>
          <td className={'w-1/5 border px-8 py-4'}>
            {'$' + (item.price * item.quantity).toFixed(2)}
          </td>
          <td>
            <Button
              handleClick={onRemoveFromCart}
              bookId={item.id}
              isAddButton={false}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItem;
