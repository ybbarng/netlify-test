import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import TagTemplateDetails from '../components/TagTemplateDetails';

class TagTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { tag } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`All Posts tagged as "${tag}"|${title}`} />
        <Sidebar {...this.props} />
        <TagTemplateDetails {...this.props} />
      </div>
    );
  }
}

TagTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
      })
    })
  }),
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  })
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String!) {
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
    allContentfulPost (
      limit: 1000,
      filter: { tags: { in: [$tag] }},
      sort: { order: DESC, fields: [datetime] }
    ){
      edges {
        node {
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
  }
`;
