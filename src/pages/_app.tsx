import '@/styles/globals.css'
import '@/styles/swiper.css'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from "react-scroll-parallax";
import { LocaleProvider } from '@/contexts/internatiolizationContext';

export default function App({ Component, pageProps }: AppProps) {
  return <ParallaxProvider> <LocaleProvider><Component {...pageProps} /> </LocaleProvider></ParallaxProvider>
}
