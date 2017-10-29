import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Links from '../Links';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { group, subtitle, copyright, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt*/
    const groupBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__group-photo"
            width="75" height="75"
            alt={group.name}
          />
        </Link>
        { isHomePage ? (
          <h1 className="sidebar__group-title">
            <Link className="sidebar__group-title-link" to="/">{group.name}</Link>
          </h1>
        ) :
          <h2 className="sidebar__group-title">
            <Link className="sidebar__group-title-link" to="/">{group.name}</Link>
          </h2>
        }
        <p className="sidebar__group-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt*/

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__group">
            {groupBlock}
          </div>
          <div>
            <Menu data={menu} />
            <Links data={group} />
            <p className="sidebar__copyright">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        group: PropTypes.object.isRequired,
        copyright: PropTypes.string.isRequired,
        menu: PropTypes.array.isRequired
      })
    })
  }),
  location: PropTypes.object
};

export default Sidebar;
