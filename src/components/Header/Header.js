import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <NavLink to='/shop'>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div className="nav">
                    <NavLink activeClassName='selected' to='/shop'>Shop</NavLink>
                    <NavLink activeClassName='selected' to='/review'>Oreder Review</NavLink>
                    <NavLink activeClassName='selected' to='/inventory'>Manage Inventory</NavLink>
                </div>
            </header>
        </div>
    );
};

export default Header;