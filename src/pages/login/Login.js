import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin'

// styles
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isPending} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Emaill:</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isPending && <button className="btn" onClick={login}>Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading....
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
