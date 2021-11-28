import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Users from '../../components/Users';
// import { Users as UserContents } from '../../contents/Books.content';
import { useRouter } from 'next/router';
// import { UserType } from '../../types/Book.type';

const UserDetail: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  // const userDetail = UserContents.filter(
  //   (user: UserType) => user.id.toString() == userId
  // );
  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div className={styles.container}>
        {/* <p>{userDetail[0].id}</p>
        <p>First Name: {userDetail[0].firstName}</p>
        <p>Last Name: {userDetail[0].lastName}</p>
        <p>Age: {userDetail[0].age}</p> */}
      </div>
    </>
  );
};

export default UserDetail;
