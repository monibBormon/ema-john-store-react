import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <a href="/shop"><img src={logo} alt="" /></a>
                </div>
                <div className="nav">
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/review'>Oreder Review</NavLink>
                    <NavLink to='/inventory'>Manage Inventory</NavLink>
                </div>
            </header>
        </div>
    );
};

export default Header;