import { Routes, BrowserRouter, Route } from "react-router-dom"
import { Login, AuthWrapper, Error, Dashboard, PrivateRoute } from "./Pages"
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  const { } = useAuth0()

  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
