import { UserProvider } from '../context/UserContext'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
      <UserProvider>
        <Component {...pageProps} />  
        <GlobalStyle /> 
      </UserProvider>
  )
}

export default MyApp
