import { Link } from "react-router-dom";


// styles
import './Navbar.css'
import Temple from '../assets/temple.svg'


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="scarface logo" />
          <span>The Scar Face</span>
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
