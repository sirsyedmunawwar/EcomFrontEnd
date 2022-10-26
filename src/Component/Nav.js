import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './images.png'
import styles from '../App.css'

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div >
      {/* <img src={logo}/> */}
      {auth ?
      <div className='NavBar' >
        <Link className='NavBarItem' to="/">Products</Link>
        <Link className='NavBarItem' to="/add">Add Products</Link>
        
      <Link className='NavBarItem' to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link>
      </div> :
      <div className='NavBar'>
        <Link className='NavBarItem' to="/signup">Signup</Link>
        <Link  className='NavBarItem'to="/login">Login</Link>
      </div>}


    </div>
  )
}

export default Nav