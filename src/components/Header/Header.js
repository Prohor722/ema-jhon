import React from 'react';
import './Heder.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div id='nav-items'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Invertory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;