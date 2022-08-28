import { useLogin } from '../../hooks/useLogin'

// styles
import "./Login.css";

export default function Login() {
  const {login, error, isPending} = useLogin()

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>login</h2>
      <label>
        <span>Email:</span>
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
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading....
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
