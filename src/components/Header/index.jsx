import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import './style.scss';

class Header extends React.Component {
  render() {
    const menu = this.props.data;
    return (
      <div className="header">
        <Menu data={menu} />
      </div>
    );
  }
}

Header.propTypes = {
  data: PropTypes.array.isRequired
};

export default Header;
