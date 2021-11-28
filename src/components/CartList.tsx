import React from 'react';
import { BookType } from 'src/types/Book.type';

interface BookListProps {
  books: BookType[];
}
const CartList = ({ books }: BookListProps) => {
  return (
    <div className={'w-10/12 m-auto mt-10'}>
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
          {books.map((book) => (
            <tr key={book.id}>
              <td className={'w-2/5 border px-8 py-4'}>{book.title}</td>
              <td className={'w-1/5 border px-8 py-4 leading-none'}>
                <input
                  className={'border-2 border-gray-200 w-full'}
                  defaultValue={0}
                />{' '}
              </td>
              <td className={'w-1/5 border px-8 py-4'}>{'$' + book.price}</td>
              <td>
                <button
                  className={
                    ' w-full bg-red-500 text-white hover:underline hover:bg-red-600 px-8 py-4'
                  }
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
              <p className={'font-bold'}>Total: $10</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
