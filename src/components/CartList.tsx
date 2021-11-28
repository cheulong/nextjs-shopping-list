import React from 'react';
import { CartContext } from 'src/context/CartContext';
import { BookType } from 'src/types/Book.type';
import { CartItem } from 'src/types/CartItem.type';

interface BookListProps {
  books: BookType[];
}
const CartList = ({ books }: BookListProps) => {
  const { value, setValue } = React.useContext(CartContext);
  const getTotalPrice = () => {
    return value.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };
  const onRemoveFromCart = (bookId: number) => {
    const existingItem: CartItem | undefined = value.find(
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
    const existingItem: CartItem | undefined = value.find(
      (book) => book.id === bookId
    );
    if (existingItem) {
      existingItem.quantity = Number(event.target.value);
      setValue([...value]);
    }
  };

  return (
    <div className={'w-10/12 m-auto mt-10'}>
      {value.length ? (
        <table className={'table-fixed shadow-lg bg-white m-auto  w-4/5'}>
          <thead>
            <tr>
              <th className={'w-2/5  px-8 py-4'}>Title</th>
              <th className={'w-1/5  px-8 py-4'}>Quantity</th>
              <th className={'w-1/5  px-8 py-4'}>Price</th>
              <th className={'w-1/5  px-8 py-4'}></th>
            </tr>
          </thead>
          <tbody>
            {value.map((book) => (
              <tr key={book.id}>
                <td className={'w-2/5 border px-8 py-4'}>{book.title}</td>
                <td className={'w-1/5 border px-8 py-4 leading-none'}>
                  <input
                    className={'border-2 border-gray-200 w-full'}
                    value={book.quantity}
                    type='number'
                    onChange={(e) => {
                      changeQuantity(book.id, e);
                    }}
                  />{' '}
                </td>
                <td className={'w-1/5 border px-8 py-4'}>
                  {'$' + (book.price * book.quantity).toFixed(2)}
                </td>
                <td>
                  <button
                    className={
                      ' w-full bg-red-500 text-white hover:underline hover:bg-red-600 px-8 py-4'
                    }
                    onClick={() => onRemoveFromCart(book.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td />
              <td />
              <td colSpan={2} className={'border  px-8 py-4'}>
                <p className={'font-bold'}>
                  Total: {'$' + getTotalPrice().toFixed(2)}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No item in the cart</p>
      )}
    </div>
  );
};

export default CartList;
