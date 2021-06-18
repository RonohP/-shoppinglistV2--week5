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
      <ul className= 'nav-bar'>
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
      <div id="id01" className="modal">
        <form className="modal-content">
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <input type="text" placeholder="Enter Email..." name="email" required />
            <input type="password" placeholder="Enter Password..." name="psw" required />
            <input type="password" placeholder="Repeat Password..." name="psw-repeat" required />
            <input type="checkbox" defaultChecked="checked" name="remember" style={{marginBottom: 15}, {float: 'left'}} /> Remember me
            <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>
            <div className="clearfix">
              {/* <button type="button" onClick={nonDisplay} className="cancelbtn">Cancel</button> */}
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
         </div>
       </form>
      </div>
    </div>

  );
};

export default Register;
