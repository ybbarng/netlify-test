import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import './style.scss';
import '../../assets/fonts/fontello-3d8dd48a/css/fontello.css';

class Header extends React.Component {
  render() {
    const menu = this.props.data;
    return (
      <div className="header-wrapper">
        <div className="header">
          <Menu data={menu} />
          <a className="login" href="/admin/"><i className="icon-login" /></a>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  data: PropTypes.array.isRequired
};

export default Header;
