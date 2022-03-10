import React from 'react';
import './header.css';
import { useEffect } from 'react/cjs/react.development';
import logo from './img/logo-digo-red-agence-de-communication-marrakech.png'
const Header = () => {
    useEffect(()=>{
        let burger=document.querySelector(".burger")
        ,nav_lis=document.querySelector(".ul_links");
        burger.addEventListener("click",function(){
        let row1=document.getElementById("row1")
        let row2=document.getElementById("row2")
        let row3=document.getElementById("row3")
            nav_lis.classList.toggle('trans');
            row1.classList.toggle('rows1')
            row2.classList.toggle('rows2')
            row3.classList.toggle('rows3')
        })
      },[])
    return (
        <div >
            <div className='nav-bar'>
                <img className='logo' src={logo}/>
                <div className='ul_links'>
                       <a className='hide' href='/services'>Our Services</a>
                       <a className='hide' href=''>Become a Tech</a>
                       <a href='/login'>Login</a>
                </div>
            </div>
            <div className="burger">
                    <div  id="row1" className="scrollb" ></div>
                    <div  id="row2" className="scrollb"></div>
                    <div  id="row3" className="scrollb"></div>
            </div>
        </div>
    );
};

export default Header;