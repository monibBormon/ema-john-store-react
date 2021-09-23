import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <a href="/index"><img src={logo} alt="" /></a>
                </div>
                <div className="nav">
                    <ul><a href="/shop">Shop</a><a href="/review">Order Review</a><a href="/inventory">Manage Invertory</a></ul>
                </div>
            </header>
        </div>
    );
};

export default Header;