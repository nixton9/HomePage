import React, { useState } from 'react'
import { LoginStyles } from '../styles/LoginStyles'

interface LoginProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  const [password, setPassword] = useState('')
  const APP_PASSWORD = process.env.REACT_APP_LOGIN_KEY

  const handleForm = e => {
    e.preventDefault()
    if (password === APP_PASSWORD) {
      setLoggedIn(true)
      localStorage.setItem('loggedIn', 'true')
    }
    setPassword('')
  }
  return (
    <LoginStyles>
      <div className="form">
        <h2 className="form__title">Homepage</h2>
        <form onSubmit={handleForm}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </LoginStyles>
  )
}

export default Login
