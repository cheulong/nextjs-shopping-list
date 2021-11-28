import React from 'react';
import { CartContext } from 'src/context/CartContext';
import { BookType } from 'src/types/Book.type';

interface BookListProps {
  books: BookType[];
}
const BookList = ({ books }: BookListProps) => {
  const { value, setValue } = React.useContext(CartContext);
  const onAddToCart = (bookId: number) => {
    const existingItem = value.find((book) => book.id === bookId);
    if (existingItem) {
      existingItem.quantity += 1;
      setValue([...value]);
    } else {
      const selectedItem = books.find((book) => book.id === bookId);
      setValue([...value, { ...selectedItem, quantity: 1 }]);
    }
  };
  const reset = () => {
    setValue([]);
  };

  return (
    <div className={'w-10/12 m-auto mt-10'}>
      <table className={'table-fixed shadow-lg bg-white m-auto w-4/5'}>
        <thead>
          <tr>
            <th className={'w-2/5  px-8 py-4'}>Title</th>
            <th className={'w-1/5  px-8 py-4'}>Author</th>
            <th className={'w-1/5  px-8 py-4'}>Price</th>
            <th className={'w-1/5  px-8 py-4'}></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className={'w-2/5 border px-8 py-4'}>{book.title}</td>
              <td className={'w-1/5 border px-8 py-4'}>{book.author}</td>
              <td className={'w-1/5 border px-8 py-4'}>{'$' + book.price}</td>
              <button
                className={
                  ' w-full bg-blue-500 text-white hover:underline hover:bg-blue-600 px-8 py-4'
                }
                onClick={() => onAddToCart(book.id)}
              >
                Add
              </button>
            </tr>
          ))}
          <button
            className={
              ' w-full bg-blue-500 text-white hover:underline hover:bg-blue-600 px-8 py-4'
            }
            onClick={() => reset()}
          >
            Add
          </button>
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
