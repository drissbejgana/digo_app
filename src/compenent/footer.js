import React from 'react';
import './footer.css';
import logo from './img/logo-digo-red-agence-de-communication-marrakech.png';

const Footer = () => {
    return (
        <div class="footer">
        <div class="footertop">
               <div class="footer_logo">
                   <img src={logo} alt=""/>
               </div>
               <div className="icons_footer">
                  <a href=''> <i class="bi bi-facebook icons"></i></a>
                  <a href=''><i class="bi bi-instagram icons"></i></a>
                  <a href=''> <i class="bi bi-youtube icons"></i></a>
                  <a href=''> <i class="bi bi-linkedin icons"></i></a>
               </div>
        </div>     
        <div class="footerbottom">
                <ul id="ul_1" className="flist">
                    <li  onClick={(e)=>{
                 document.getElementById('ul_1').classList.toggle('display');
                document.getElementsByClassName('play')[0].classList.toggle('rotate');
                  }}  style={{paddingBottom:'10px',fontWeight:'bold'}}>
                    <div id='play1' className='play' ></div>
                        Company</li>
                    <li>About Us</li>
                    <li>Faq</li>
                    <li>Become a Tech</li>
                </ul>
                <ul id="ul_2" className="flist left">
                    <li  onClick={(e)=>{
                 document.getElementById('ul_2').classList.toggle('display');
                document.getElementsByClassName('play')[1].classList.toggle('rotate');
                  }}   style={{paddingBottom:'10px',fontWeight:'bold'}}>
                    <div className='play' ></div> Legals</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li style={{visibility:"hidden"}}>Terms</li>
                </ul>
                <div className="img_ico">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
       </div>    
          <div className="copyright">
              <p>© {new Date().getFullYear()}</p>
          </div>
     </div>
    );
};

export default Footer;