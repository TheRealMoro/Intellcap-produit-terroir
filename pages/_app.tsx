import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Providers,DataContext} from '../Context/ContextApi';

function MyApp({ Component, pageProps }: AppProps) {
  return <Providers>
           <Component {...pageProps} />
        </Providers>
}

export default MyApp
