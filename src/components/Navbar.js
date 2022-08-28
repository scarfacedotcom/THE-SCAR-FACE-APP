import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout"


// styles
import './Navbar.css'
import Logo from '../assets/logo.png'


export default function Navbar() {
  const {logout, error, isPending} = useLogout()

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="scarface logo" />
          <span>Nancy App</span>
        </li>

        <li><Link to='./login'>Login</Link></li>
        <li><Link to='./signup'>Sign up</Link></li>
        <li>
          {!isPending && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" disabled>Logging out</button>}
          {error && <div className="error">{error}</div>}
        </li>
      </ul>
    </nav>
  )
}
