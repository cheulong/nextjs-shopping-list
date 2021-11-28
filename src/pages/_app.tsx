import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/nav/Navbar';
import { CartContext } from 'src/context/CartContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState([]);
  return (
    <CartContext.Provider value={{ value, setValue }}>
      <Navbar />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}
export default MyApp;
