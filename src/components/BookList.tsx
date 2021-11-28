import React from 'react';
import { CartContext } from 'src/context/CartContext';
import { BookType } from 'src/types/Book.type';
import BookItem from './BookItem';

interface BookListProps {
  books: BookType[];
}
const BookList = ({ books }: BookListProps) => {
  const { value, setValue } = React.useContext(CartContext);

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
          <BookItem books={books} />
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
