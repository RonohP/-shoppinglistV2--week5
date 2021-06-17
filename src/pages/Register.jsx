import { useState } from 'react';
import {
  faSignInAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../components/NavBar';

const Register = () => {
  return (
    <div>
      <nav>
        <ul className='nav-bar'>
          <NavBar
            href='/login'
            title='Login'
            icon={<FontAwesomeIcon icon={faSignInAlt} />}
          />
          <NavBar
            href='/home'
            title='Home'
            icon={<FontAwesomeIcon icon={faHome} />}
          />
        </ul>
      </nav>
      <section>
        <form >
        </form>
      </section>
    </div>
  );
};

export default Register;
