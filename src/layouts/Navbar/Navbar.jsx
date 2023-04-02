import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar = () => {

  return (
    <nav className='navbar navbar-light bg-light navbar-expand-lg'>
      <div className={`${styles.navbar__imgBox}`}>
        <NavLink to='/'>
          <img
            className='mw-100 mh-100'
            src='https://www.kindpng.com/picc/m/128-1280187_github-logo-png-github-transparent-png.png'
            alt='Github Logo'
          />
        </NavLink>
      </div>
      <ul className='navbar-nav d-flex justify-content-between ms-auto'>
        <li className='nav-item active ps-2 pe-2'>
          <NavLink to='/' className='btn btn-dark'>
              Serach
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
