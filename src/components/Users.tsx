import React from 'react';
import { UserType } from '../types/User.type';
import User from './User';

interface usersProps {
  users: UserType[];
}

const Users = ({ users }: usersProps) => {
  return (
    <div data-testid='users'>
      {users.map((item) => (
        <User user={item} key={item.id} />
      ))}
    </div>
  );
};

export default Users;
