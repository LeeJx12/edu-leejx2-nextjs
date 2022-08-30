import { useEffect } from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  fetch(`${process.env.NEXT_PUBLIC_URL}/api/audio`, {
      method: 'POST',
      body: JSON.stringify({
          callType: 'INIT'
      })
  }).then(response => response.json())
  .then(console.log); 

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
