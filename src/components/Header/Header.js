import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user);
    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <NavLink to='/shop'>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div className="nav" style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <NavLink activeClassName='selected' to='/shop'>Shop</NavLink>
                        <NavLink activeClassName='selected' to='/review'>Oreder Review</NavLink>
                        <NavLink activeClassName='selected' to='/inventory'>Manage Inventory</NavLink>
                    </div>
                    <div>
                        {
                            user.displayName ?
                                <span title='click for log out' onClick={logOut} style={{ cursor: 'pointer' }}><img style={{ width: '50px', borderRadius: '50%', paddingTop: '20px' }} src={user.photoURL} alt="" /></span> :
                                <NavLink activeClassName='selected' to='/login'>Login</NavLink>
                        }
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;