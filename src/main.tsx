import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GithubProvider } from './Context/Context.tsx'
import { Auth0Provider } from '@auth0/auth0-react'


const auth0Domain = 'dev-jtexi7myq7etjnac.us.auth0.com'
const auth0ClientId = 'bKM7wvZ6UQ7obf0bNaLoHJcRu7SdRECE'


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
