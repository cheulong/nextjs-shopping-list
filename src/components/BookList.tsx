import React from 'react';
import { CartContext } from 'src/context/CartContext';
import { BookType } from 'src/types/Book.type';
import BookItem from './BookItem';

interface BookListProps {
  books: BookType[];
}
const BookList = ({ books }: BookListProps) => {
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
        <tbody data-testid='test-tbody'>
          <BookItem books={books} />
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
