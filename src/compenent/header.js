import React from 'react';
import './header.css';
import logo from './img/logo-digo-red-agence-de-communication-marrakech.png'
const Header = () => {
    return (
        <div >
            <div className='nav-bar'>
                <img className='logo' src={logo}/>
                <div  className='ul_links'>
                       <a className='hide' href='/services'>Our Services</a>
                       <a className='hide' href=''>Become a Tech</a>
                       <a href='/login'>Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;