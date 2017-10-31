import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-roboto';
import Menu from '../components/Menu';
import '../assets/scss/init.scss';
import './style.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    const { title, menu, copyright } = this.props.data.site.siteMetadata;

    return (
      <div className="layout">
        <Helmet defaultTitle={title} />
        <Menu data={menu} />
        <div className="layout__body">
          {children()}
        </div>
        <p className="layout__copyright">
          {copyright}
        </p>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        menu: PropTypes.array.isRequired,
        copyright: PropTypes.string.isRequired
      })
    })
  })
};

export const pageQuery = graphql`
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
  }
`;

export default Layout;
