import { render, screen } from '@testing-library/react';
import User from './User';
import { Users as UserContents } from '../contents/Users.content';
import { Normal } from './User.stories';

const user = UserContents[0];

describe('User', () => {
  it('renders a user', () => {
    const { getByTestId } = render(<Normal user={user} />);
    const firstName = getByTestId('firstName');
    expect(firstName.textContent).toBe('First Name: Alex');
  });
});
