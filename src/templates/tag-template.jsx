import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

const TagTemplate = ({ data, pathContext }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { tag } = pathContext;
  const posts = [];
  data.allContentfulPost.edges.forEach((edge) => {
    posts.push(edge.node);
  });

  return (
    <Layout title={`All Posts tagged as "${tag}"|${title}`} description={subtitle}>
      <Sidebar />
      <Posts
        title={`'${tag}' 태그가 달린 글`}
        posts={posts}
      />
    </Layout>
  );
};

TagTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    })
  }).isRequired,
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    site {
      siteMetadata {
        title
        subtitle
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

export default TagTemplate;
