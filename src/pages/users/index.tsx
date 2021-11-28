import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Users from '../../components/Users';
import { Users as UserContents } from '../../contents/Users.content';

const UsersPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Users users={UserContents} />
    </div>
  );
};

export default UsersPage;
