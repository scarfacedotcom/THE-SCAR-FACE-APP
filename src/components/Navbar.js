import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";


// styles
import './Navbar.css'
import Logo from '../assets/logo.png'


export default function Navbar() {
  const {logout, error, isPending} = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="scarface logo" />
          <span>Nancy App</span>
        </li>

        {!user && (
          <>
            <li><Link to='./login' className="btn-btn">Login</Link></li>
            <li><Link to='./signup' className="btn-btn">Sign up</Link></li>
          </>
        )}
        
        {user && (
          <li>
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out</button>}
          </li>
        )}
      </ul>
    </nav>
  )
}
