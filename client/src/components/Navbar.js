import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <nav>
      <div className="nav-wrapper #212121 grey darken-4">
        <Link to="/" className="brand-logo">Instagram</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/signin">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/createpost">Create Post</Link></li>
        </ul>
      </div>
    </nav>
  )
}
