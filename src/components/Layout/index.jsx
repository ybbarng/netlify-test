import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import Copyright from '../Copyright';
import Header from '../Header';

import styles from './style.scss';

const LayoutView = ({ children, title, description, menu, copyright }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Header data={menu} />
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
      }
    `}
    render={data => (
      <LayoutView
        {...props}
        menu={data.site.siteMetadata.menu}
        copyright={data.site.siteMetadata.copyright}
      />
    )}
  />
);

export default Layout;
