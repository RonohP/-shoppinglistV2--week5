import { useState } from 'react';
import { faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../components/NavBar';

const Login = () => {
  return (
  <div className="login-page">
    <nav>
      <ul className= 'nav-bar'>
        <NavBar
          href='/logout'
          title='Logout'
          icon={<FontAwesomeIcon icon={faSignOutAlt} />}
        />
        <NavBar
          href='/home'
          title='Home'
          icon={<FontAwesomeIcon icon={faHome} />}
        />
      </ul>
    </nav>
    <form >
      <input type="text" placeholder="Enter email..." required/>
      <input type="password" placeholder="Password..."/>
      <button>Login</button>
    </form>
  </div>);
};

export default Login;
