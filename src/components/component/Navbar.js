import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navbar = ({ icon1, icon2, icon3 }) => {
  return (
    <Fragment>
      <div className='main-nav-container'>
        <Hamburger />

        <nav className='main-nav'>
          <ul>
            <li>
              <i className={icon1} />
              <Link className='nav' to='/Home'>
                Home
              </Link>
            </li>
            <li>
              <i className={icon2} />
              <Link className='nav' to='/Portfolio'>
                Portfolio/Cv
              </Link>
            </li>
            <li>
              <i className={icon3} />
              <Link className='nav' to='/Contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'JohanSmeij',
  icon1: 'fas fa-igloo fa-2x',
  icon2: 'fas fa-palette fa-2x',
  icon3: 'far fa-envelope-open fa-2x'
};

export default Navbar;
