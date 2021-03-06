import React, { useContext, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useItem from 'src/hooks/useItem';

const Navbar = () => {
  const router = useRouter();
  const { totalItems } = useItem();

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
              className={` px-3 py-1 rounded-full hover:underline relative
                ${
                  router.pathname === '/cart'
                    ? 'bg-yellow-600 underline'
                    : 'bg-yellow-400'
                }`}
            >
              cart
              <span
                className={
                  totalItems === 0
                    ? 'hidden'
                    : 'absolute bg-red-600 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3'
                }
              >
                {totalItems}
              </span>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
