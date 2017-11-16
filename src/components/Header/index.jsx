import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import './style.scss';
import '../../assets/fonts/fontello-3d8dd48a/css/fontello.css';

class Header extends React.Component {
  render() {
    const menu = this.props.data;

    function moveToAdmin() {
      if (typeof window !== 'undefined') {
        // To avoid un-def error on 'window'
        global.window.location = '/admin/';
      }
    }
    return (
      <div className="header-wrapper">
        <div className="header">
          <Menu data={menu} />
          {/* Lint error: Links must not point to "#". Use a more descriptive href or
            use a button instead. (jsx-a11y/href-no-hash) */}
          <a className="login" onClick={moveToAdmin} href="#" title="로그인">Login</a>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  data: PropTypes.array.isRequired
};

export default Header;
