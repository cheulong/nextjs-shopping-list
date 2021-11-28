import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div>
      <nav className={' bg-blue-500 text-white py-5'}>
        <div
          className={'max-w-lg m-auto flex justify-around items-center h-full'}
        >
          <Link href={`./`} passHref>
            <a
              className={` px-3 py-1 rounded-full hover:underline  ${
                router.pathname === '/'
                  ? 'bg-yellow-600 underline'
                  : 'bg-yellow-400'
              }`}
            >
              home
            </a>
          </Link>
          <Link href={`./cart`} passHref>
            <a
              className={
                'bg-yellow-400 px-3 py-1 rounded-full hover:underline relative'
              }
            >
              cart
              <span
                className={
                  'absolute bg-red-600 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3'
                }
              >
                0
              </span>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
