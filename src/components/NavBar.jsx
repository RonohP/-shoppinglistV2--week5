import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import useContextGetter from '../hooks/useContextGetter';
// import useLoggedIn from '../hooks/useLoggedIn';

const NavBar = () => {

  const { dispatch, state: isUserLoggedIn, } = useContextGetter();

  const location = useLocation();

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const renderNav = () => {
    if (!isUserLoggedIn && location.pathname === '/login') {
      return (
        <>
          <li>
            <Link to='/register' title='Register'>
              {<FontAwesomeIcon icon={faUserPlus} />}
            </Link>
          </li>
        </>
      );
    }

    if (!isUserLoggedIn && location.pathname === '/register') {
      return (
        <>
          <li>
            <Link to='/login' title='Login'>
              {<FontAwesomeIcon icon={faSignInAlt} />}
            </Link>
          </li>
        </>
      );
    }

    if (isUserLoggedIn) {
      return (
        <>
          <li style={{ float: 'left' }}>
            <Link to='/home' title='Home'>
              {<FontAwesomeIcon icon={faHome} />}
            </Link>
          </li>
          <li>
            <Link to='/' title='Logout' onClick={logout}>
              {<FontAwesomeIcon icon={faSignOutAlt} />}
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <nav>
      <ul className='nav-bar'>
        {renderNav()}
      </ul>
    </nav>
  );
};

export default NavBar;
