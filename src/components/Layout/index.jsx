import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import Copyright from '../Copyright';
import Header from '../Header';

import styles from './style.scss';

import originalLogo from '../../assets/images/blog_logo.png';

const LayoutView = ({ children, title, description, siteName, menu, logo, copyright }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={siteName} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={originalLogo} />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:locale" content="ko_KR" />
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
  siteName: PropTypes.string.isRequired,
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
            title
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
        siteName={data.site.siteMetadata.title}
        menu={data.site.siteMetadata.menu}
        logo={data.logo}
        copyright={data.site.siteMetadata.copyright}
      />
    )}
  />
);

export default Layout;
