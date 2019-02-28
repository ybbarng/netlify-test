import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';

import './style.scss';

import '../../assets/fonts/fontello-3d8dd48a/css/fontello.css';

const Header = ({ menu, logo }) => (
  <div className="header-wrapper">
    <div className="header">
      <Menu
        menu={menu}
        logo={logo}
      />
    </div>
  </div>
);

Header.propTypes = {
  menu: PropTypes.array.isRequired,
  logo: PropTypes.array.isRequired
};

export default Header;
