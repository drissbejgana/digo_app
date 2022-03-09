import React from 'react';
import './login.css'
const Login = () => {
    return (
         <div className='login'>
            <h1>Welcome to Xigman</h1>   
             <form className='form_login' action='POST'>
                <div className='lbl'>Email</div>
                <input className='inputs' type="Email" />
                <div className='lbl'>Password</div>
                <input className='inputs' type="Email" />
               <div className='btn'>
                  <input type="submit" value="LOGIN"/>
               </div>
             </form>
         </div>
    );
};

export default Login;