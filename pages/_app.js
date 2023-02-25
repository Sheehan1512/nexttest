import RootLayout from '../partials/layouts/rootLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
