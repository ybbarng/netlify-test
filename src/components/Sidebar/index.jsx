import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import './style.scss';

const SidebarView = ({ group, subtitle, mainPhoto, isIndex }) => {
  /* eslint-disable jsx-a11y/img-redundant-alt */
  const groupBlock = (
    <div>
      <Link to="/">
        <Img
          title="Main Image"
          alt={group.name}
          className="sidebar__group-photo"
          fixed={mainPhoto.fixed}
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
        mainPhoto: imageSharp(original: { src: { regex: "/main_photo/" } }) {
          fixed(width: 145, height: 257, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `}
    render={data => (
      <SidebarView
        {...props}
        group={data.site.siteMetadata.group}
        subtitle={data.site.siteMetadata.subtitle}
        mainPhoto={data.mainPhoto}
      />
    )}
  />
);

export default Sidebar;
