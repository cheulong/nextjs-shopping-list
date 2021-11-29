import React, { useMemo } from 'react';
import { CartContext } from 'src/context/CartContext';
import { BookType } from 'src/types/Book.type';
import { CartItem as CartItemType } from 'src/types/CartItem.type';
import _ from 'lodash';

const useItem = (items?: BookType[]) => {
  const { value, setValue } = React.useContext(CartContext);

  const totalItems = useMemo(() => _.sumBy(value, 'quantity'), [value]);

  const onAddToCart = (bookId: number) => {
    const existingItem = value.find((book) => book.id === bookId);
    if (existingItem) {
      existingItem.quantity += 1;
      setValue([...value]);
    } else {
      const selectedItem = items && items.find((book) => book.id === bookId);
      setValue([...value, { ...selectedItem, quantity: 1 }]);
    }
  };

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

  return { onAddToCart, onRemoveFromCart, changeQuantity, totalItems };
};

export default useItem;
