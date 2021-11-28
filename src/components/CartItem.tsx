import React from 'react';
import { BookType } from 'src/types/Book.type';
import { CartContext } from 'src/context/CartContext';
import { CartItem as CartItemType } from 'src/types/CartItem.type';

interface CartItemProps {
  items: CartItemType[];
}

const CartItem = ({ items }: CartItemProps) => {
  const { value, setValue } = React.useContext(CartContext);
  const onRemoveFromCart = (bookId: number) => {
    const existingItem: CartItemType | undefined = value.find(
      (book) => book.id === bookId
    );
    if (existingItem) {
      if (existingItem.quantity === 1) {
        const newValue = value.filter((book) => book.id !== bookId);
        setValue(newValue);
      } else {
        existingItem.quantity -= 1;
        setValue([...value]);
      }
    }
  };

  const changeQuantity = (
    bookId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const existingItem: CartItemType | undefined = value.find(
      (book) => book.id === bookId
    );
    if (existingItem) {
      existingItem.quantity = Number(event.target.value);
      setValue([...value]);
    }
  };

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
            <button
              className={
                ' w-full bg-red-500 text-white hover:underline hover:bg-red-600 px-8 py-4'
              }
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItem;
