import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import Copyright from '../Copyright';
import Header from '../Header';

import styles from './style.scss';

const LayoutView = ({ children, title, description, menu, logo, copyright }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Header
      menu={menu}
      logo={logo}
    />
    <div className="layout">
      <div className="layout__body">
        {children}
      </div>
      <Copyright copyright={copyright} />
    </div>
  </div>
);

LayoutView.propTypes = {
  children: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
  copyright: PropTypes.string.isRequired
};

const Layout = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            menu {
              label
              path
            }
            copyright
          }
        }
        logo: imageSharp(original: { src: { regex: "/blog_logo/" } }) {
          fixed(width: 116, height: 45, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    `}
    render={data => (
      <LayoutView
        {...props}
        menu={data.site.siteMetadata.menu}
        logo={data.logo}
        copyright={data.site.siteMetadata.copyright}
      />
    )}
  />
);

export default Layout;
