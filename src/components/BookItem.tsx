import React from 'react';
import { BookType } from 'src/types/Book.type';
import { CartContext } from 'src/context/CartContext';

interface BookItemProps {
  books: BookType[];
}

const BookItem = ({ books }: BookItemProps) => {
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
  return (
    <>
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
    </>
  );
};

export default BookItem;
