import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-link';

import profilePic from '../../assets/photo.jpg';

import './style.scss';

const SidebarView = ({ group, subtitle, isIndex }) => {
  /* eslint-disable jsx-a11y/img-redundant-alt */
  const groupBlock = (
    <div>
      <Link to="/">
        <img
          src={profilePic}
          className="sidebar__group-photo"
          alt={group.name}
        />
      </Link>
      { isIndex ? (
        <h1 className="sidebar__group-title">
          <Link className="sidebar__group-title-link" to="/">{group.name}</Link>
        </h1>
      ) : (
        <h2 className="sidebar__group-title">
          <Link className="sidebar__group-title-link" to="/">{group.name}</Link>
        </h2>
      )
      }
      <p className="sidebar__group-subtitle">{subtitle}</p>
    </div>
  );

  /* eslint-enable jsx-a11y/img-redundant-alt */

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__group">
          {groupBlock}
        </div>
      </div>
    </div>
  );
};

SidebarView.propTypes = {
  subtitle: PropTypes.string.isRequired,
  group: PropTypes.object.isRequired,
  isIndex: PropTypes.bool.isRequired
};

const Sidebar = props => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            subtitle
            group {
              name
            }
          }
        }
      }
    `}
    render={data => (
      <SidebarView
        {...props}
        subtitle={data.site.siteMetadata.subtitle}
        group={data.site.siteMetadata.group}
      />
    )}
  />
);

export default Sidebar;
