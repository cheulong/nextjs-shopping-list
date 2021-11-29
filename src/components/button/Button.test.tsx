import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders add button', () => {
    const { getByTestId } = render(
      <Button handleClick={() => []} bookId={1} isAddButton={true} />
    );
    const btn = getByTestId('test-button');
    expect(btn).toHaveTextContent('Add');
  });

  it('renders add button', () => {
    const { getByTestId } = render(
      <Button handleClick={() => []} bookId={1} isAddButton={false} />
    );
    const btn = getByTestId('test-button');
    expect(btn).toHaveTextContent('Remove');
  });
});
