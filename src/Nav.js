import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import storeNameImage from './store_name.png'

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <img src='https://newrelic.com/assets/newrelic/source/NewRelic-logo-square-clr-w.png' alt='' style={{width: 120, height: 100}}/>
            <img src={storeNameImage} alt='' style={{width: 700, height: 100}}/>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
