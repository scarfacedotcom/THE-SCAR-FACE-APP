import { useState } from 'react'
import './Signup.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName]= useState('')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <div>
      Sign up
    </div>
  )
}
