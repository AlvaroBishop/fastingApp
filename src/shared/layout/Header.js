import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <nav className='container'>
            <div className='nav-logo'>
                <Link to="/">
                    <img src={logo} className="logo" alt='logo'/>
                </Link>
            </div>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/clock">Clock</Link>
                <Link to="/food">FoodStats</Link>
            </div>
        </nav>
    </header>
  )
}
