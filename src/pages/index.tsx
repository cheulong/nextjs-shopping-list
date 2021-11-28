import BookList from '@/components/BookList';
import Navbar from '@/components/nav/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Books } from 'src/contents/Books.content';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BookList books={Books} />
    </div>
  );
};

export default Home;
