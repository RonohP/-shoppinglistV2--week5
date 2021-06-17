import { useState } from 'react';

const NavBar = (props) => {
  return (
    <li>
      <a href={props.href} title={props.title}>
        {props.icon}
      </a>
    </li>
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
