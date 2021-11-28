import React from 'react';
// import { UserType } from '../types/Book.type';
import User from './User';

// interface usersProps {
//   users: UserType[];
// }

const Users = ({ users }: any) => {
  return (
    <div data-testid='users'>
      {users.map((item: { id: any }) => (
        <User user={item} key={item.id} />
      ))}
    </div>
  );
};

export default Users;
