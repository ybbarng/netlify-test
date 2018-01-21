import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import AuthorTemplateDetails from '../components/AuthorTemplateDetails';

class AuthorTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { name } = this.props.data.contentfulAuthor;

    return (
      <div>
        <Helmet title={`${name}가 쓴 글 - ${title}`} />
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
    }),
    contentfulAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
};

export default AuthorTemplate;

export const pageQuery = graphql`
  query AuthorPage ($id: String!) {
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
    contentfulAuthor (id: { eq: $id }) {
      name
      post {
        id
        title
        slug
        author {
          name
          slug
        }
        datetime
        category {
          id
          name
          slug
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
