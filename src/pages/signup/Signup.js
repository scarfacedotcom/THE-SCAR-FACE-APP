import { useState } from 'react'
import './Signup.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName]= useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const handleFileChange = (e) => {
    setThumbnail(null)

    let selected = e.target.files[0]
    console.log(selected)

    if(!selected) {
      setThumbnailError('Please select a file')
    }
    if(!selected.type.includes('image')) {
      setThumbnailError('Please select a image')
    }
    if(selected.size > 100000) {
      setThumbnailError('Image size my be less than 100kb')
    }
  }

  return (
    <form className="auth-form">
      <h2 className='sign-up' >Sign Up</h2>
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
      <label>
        <span>Profile Thumbnail:</span>
        <input
          required 
          type="file"
          onChange={handleFileChange}
        />
      </label>
      <button className="btn">Sign Up</button>
    </form>
  )
}
