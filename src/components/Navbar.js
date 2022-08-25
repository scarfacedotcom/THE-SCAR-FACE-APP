import { Link } from "react-router-dom";


// styles
import './Navbar.css'
import Logo from '../assets/logo.png'


export default function Navbar() {
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
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  )
}
