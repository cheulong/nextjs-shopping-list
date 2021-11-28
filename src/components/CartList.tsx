import React from 'react';
import { CartContext } from 'src/context/CartContext';
import { BookType } from 'src/types/Book.type';
import CartItem from './CartItem';

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
            <CartItem items={value} />
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
