import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GithubProvider } from './Context/Context.tsx'
import { Auth0Provider } from '@auth0/auth0-react'


const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID


ReactDOM.createRoot(document.getElementById('root')!).render(

  <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>

)
