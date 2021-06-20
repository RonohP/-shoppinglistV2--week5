import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import useContextGetter from '../hooks/useContextGetter';

const NavBar = () => {
  const {
    dispatch,
    state: { isUserLoggedIn },
  } = useContextGetter();
  console.log(isUserLoggedIn);
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
      <>
        <li>
          <Link to='/login' title='Login'>
            {<FontAwesomeIcon icon={faSignInAlt} />}
          </Link>
        </li>
      </>;
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
    // <li>
    //   <a href={props.href} title={props.title} onClick={props.onClick}>
    //     {props.icon}
    //   </a>
    // </li>
    // <ul className='nav-bar'>
    //     <li>

    //     </li>

    //   <li >
    //     <a href='/home' title='Home'>
    //       {<FontAwesomeIcon icon={faHome} />}
    //     </a>
    //   </li>
    //   <li>
    //     <a href='/login' title='Login'>
    //       {<FontAwesomeIcon icon={faSignInAlt} />}
    //     </a>
    //   </li>
    //   <li>
    //     <a href='/register' title='Register'>
    //       {<FontAwesomeIcon icon={faUserPlus} />}
    //     </a>
    //   </li>
    // </ul>
  );
};

export default NavBar;
