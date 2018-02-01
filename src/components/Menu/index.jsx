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
      </ul>
    );

    return (
      <nav className="menu">
        <ResponsiveMenu
          menuOpenButton={<div className="menu__toggle">&#9776;</div>}
          menuCloseButton={<div className="menu__toggle">&times;</div>}
          changeMenuOn="500px"
          menu={menuBlock}
        />
      </nav>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.array.isRequired
};

export default Menu;
