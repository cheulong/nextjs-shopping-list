import React from 'react';
// import { UserType } from '..types/Book.type';
import styles from '../styles/User.module.css';
import Link from 'next/link';

// interface userProps {
//   user: UserType;
// }
const User = ({ user }: any) => {
  return (
    <Link href={`/users/${user.id}`} passHref>
      <div className={styles.container}>
        <p data-testid='firstName'>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Age: {user.age}</p>
      </div>
    </Link>
  );
};

export default User;
