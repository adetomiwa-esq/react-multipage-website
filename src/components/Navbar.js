import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [positive, setPositive] = useState(false)
  function toggle(){
    setPositive(prevValue => !prevValue)
  }
  function resetNavlinks(){
    setPositive(false)
  }
  return (
    <nav className='nav'>
        <div className='comp-logo'>
            Herme<i className='fas fa-bolt'></i> <i className='fas fa-globe'></i>
        </div>
        <div className='mobile-toggle' onClick={toggle}>
          <i className={positive ? `fas fa-close` : `fas fa-bars`}></i>
        </div>
        <ul className={`nav-links ${positive ? 'nav-links-display':''}`}>
          <Link onClick={resetNavlinks} to='/' className='link'><li>Home</li></Link>
          <Link onClick={resetNavlinks} to='/services' className='link'><li>Services</li></Link>
          <Link onClick={resetNavlinks} to='/products' className='link'><li>Products</li></Link>
          <Link onClick={resetNavlinks} to='/signUp' className='sign-up link'><li>Sign Up</li></Link>
        </ul>
        <Link to='/signUp' className='sign-up-link'><button className='sign-up-button'>SIGN UP</button></Link>
    </nav>
  )
}

export default Navbar;