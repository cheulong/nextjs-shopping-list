import React from 'react';
import { BookType } from 'src/types/Book.type';
import { CartContext } from 'src/context/CartContext';
import Button from './button/Button';
import useItem from 'src/hooks/useItem';

interface BookItemProps {
  books: BookType[];
}

const BookItem = ({ books }: BookItemProps) => {
  const { value, setValue } = React.useContext(CartContext);
  const { onAddToCart } = useItem(books);

  return (
    <>
      {books.map((book) => (
        <tr key={book.id}>
          <td className={'w-2/5 border px-8 py-4'}>{book.title}</td>
          <td className={'w-1/5 border px-8 py-4'}>{book.author}</td>
          <td className={'w-1/5 border px-8 py-4'}>{'$' + book.price}</td>
          <Button
            handleClick={onAddToCart}
            bookId={book.id}
            isAddButton={true}
          />
        </tr>
      ))}
    </>
  );
};

export default BookItem;
