import React, { useEffect } from 'react';
import './Login.css';
import Header from '../../components/Header/Header';
import setPreferredLang from '../../components/translatePage';

function Login() {
    useEffect(() => {
        setPreferredLang();
    }, []);
    
    return (
        <div>
            <Header />
            <div className='login'>
                <div className='login-container'>
                    <h1 className='text-align-left' style={{ margin: "0 0 16px" }}>Log in</h1>
                    <form action='/dashboard' method='get'>
                        <input id='username' name='username' type='text' placeholder='Username' className='login-input' ></input>
                        <input id='password' name='password' type='password' placeholder='Password' className='login-input'></input>
                        <a href='/' style={{ textDecoration: "none", color: "#0000FF", display: "block", marginLeft: "auto" }}>Reset username/password?</a>
                        <button type='submit' className='login-button'>Log in</button>
                    </form>
                    <hr />
                    <a href='/signup' style={{ textDecoration: "none", color: "#0000FF" }}>Sign up from this link</a>
                </div>
            </div>
        </div>
    )
}

export default Login;