import { useEffect } from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { StoreProvider } from './context'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])

  return (
    <StoreProvider data={pageProps.data}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
