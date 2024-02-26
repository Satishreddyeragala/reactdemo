import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/Cart'>Cart</Link>       
    </nav>
  )
}

export default Nav