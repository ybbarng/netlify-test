import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { name } = this.props.data.contentfulCategory;

    return (
      <div>
        <Helmet title={`All posts of ${name}|${title}`} />
        <Sidebar {...this.props} />
        <CategoryTemplateDetails {...this.props} />
      </div>
    );
  }
}

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
      })
    }),
    contentfulCategory: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($id: String!) {
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
    contentfulCategory (id: {eq: $id }) {
      name
      slug
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
