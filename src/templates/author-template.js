import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import AuthorTemplateDetails from '../components/AuthorTemplateDetails';

class AuthorTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { authorId } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`${authorId} - ${title}`} />
        <Sidebar {...this.props} />
        <AuthorTemplateDetails {...this.props} />
      </div>
    );
  }
}

AuthorTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
      })
    })
  }),
  pathContext: PropTypes.shape({
    authorId: PropTypes.string.isRequired
  })
};

export default AuthorTemplate;

export const pageQuery = graphql`
  query AuthorPage($authorId: String) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        group {
          name
        }
        authors {
          id
          name
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { authorId: { eq: $authorId }, layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            authorSlug
          }
          frontmatter {
            title
            date
            authorId
            description
          }
        }
      }
    }
  }
`;
