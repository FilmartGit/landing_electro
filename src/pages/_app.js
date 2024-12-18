import "@/styles/globals.css";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} className={inter.className} />;
}
