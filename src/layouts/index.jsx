import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-roboto';
import Menu from '../components/Menu';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    const { menu } = this.props.data.site.siteMetadata;

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by John Doe" />
        <Menu data={menu} />
        {children()}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        menu: PropTypes.array.isRequired
      })
    })
  })
};

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        menu {
          label
          path
        }
      }
    }
  }
`;

export default Layout;
