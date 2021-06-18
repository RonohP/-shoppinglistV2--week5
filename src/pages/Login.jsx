import React, { useState } from 'react';
import { faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../components/NavBar';
import '../styles/App.css';

const Login = () => {

  return (
    <div className='login-page'>
      <nav>
        <ul className='nav-bar'>
          <NavBar
            href='/register'
            title='Register'
            icon={<FontAwesomeIcon icon={faUserPlus} />}
          />
          <NavBar
            href='/home'
            title='Home'
            icon={<FontAwesomeIcon icon={faHome} />}
          />
        </ul>
      </nav>
      <div id='id01' className='modal'>
        <form className='modal-content animate'>
          <div className='container'>
            <input
              type='text'
              placeholder='Enter email...'
              name='email'
              required
            />
            <input
              type='password'
              placeholder='Enter Password...'
              name='psw'
              required
            />
            <button type='submit'>Login</button>
            <input
              type='checkbox'
              defaultChecked='checked'
              name='remember'
            />{' '}
            Remember me
          </div>
          <div className='container'>
            {/* <button type='button' className='cancelbtn'>
              Cancel
            </button> */}
            <span className='psw'>
              <a href='#'> Forgot password? </a>
            </span>
          </div>
        </form>
      </div>
      {/* //   <form >
  //     <input type="text" placeholder="Enter email..." required/>
  //     <input type="password" placeholder="Password..."/>
  //     <button>Login</button>
  //   </form> */}
    </div>
  );
};

export default Login;
