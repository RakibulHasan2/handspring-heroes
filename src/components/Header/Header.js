import React from 'react';
import './Header.css'
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Handspring Heroes</h1>
        </div>
    );
};

export default Header;