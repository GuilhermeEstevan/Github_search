import { Wrapper } from "."
import loginImg from '../../images/login-img.svg'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

  const { loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    return loginWithRedirect()
  }

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
        <button
          className="btn"
          onClick={handleLogin}>
          login/sign up
        </button>
      </div>
    </Wrapper>
  )
}
export default Login