import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import ResponsiveMenu from 'react-responsive-navbar';
import './style.scss';

class Menu extends React.Component {
  render() {
    const menu = this.props.data;

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item =>
          <li className="menu__list-item" key={item.path}>
            <Link
              exact to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
          </li>
        )}
        <li className="menu__list-item menu__list-item-login" key="login">
          <a className="menu__list-item-link" href="https://be.contentful.com/login" title="로그인">Login</a>
        </li>
      </ul>
    );

    return (
      <nav className="menu">
        <ResponsiveMenu
          menuOpenButton={<div className="menu__small-toggle-button">&#9776;</div>}
          menuCloseButton={<div className="menu__small-toggle-button">&times;</div>}
          changeMenuOn="685px"
          menu={menuBlock}
          largeMenuClassName="menu__large"
          smallMenuClassName="menu__small"
        />
      </nav>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.array.isRequired
};

export default Menu;
