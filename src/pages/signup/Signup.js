import { useState } from 'react'
import './Signup.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName]= useState('')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <form className="auth-form">
      <h2>sign up</h2>
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
          type="passwrod"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          required 
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
    </form>
  )
}
