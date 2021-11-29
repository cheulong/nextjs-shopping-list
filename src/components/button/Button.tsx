import React from 'react';

interface ButtonProps {
  handleClick: (id: number) => void;
  bookId: number;
  isAddButton: boolean;
}
const Button = ({ handleClick, bookId, isAddButton }: ButtonProps) => {
  return (
    <>
      {isAddButton ? (
        <button
          data-testid='test-button'
          className={
            ' w-full bg-blue-500 text-white hover:underline hover:bg-blue-600 px-8 py-4'
          }
          onClick={() => handleClick(bookId)}
        >
          Add
        </button>
      ) : (
        <button
          data-testid='test-button'
          className={
            ' w-full bg-red-500 text-white hover:underline hover:bg-red-600 px-8 py-4'
          }
          onClick={() => handleClick(bookId)}
        >
          Remove
        </button>
      )}
    </>
  );
};

export default Button;
