import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

const CategoryTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { name, post: posts } = data.contentfulCategory;

  return (
    <Layout title={`All posts of ${name}|${title}`} description={subtitle}>
      <Sidebar />
      <Posts
        title={name}
        posts={posts}
      />
    </Layout>
  );
};

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    contentfulCategory: PropTypes.shape({
      name: PropTypes.string.isRequired,
      post: PropTypes.array
    })
  }).isRequired
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($id: String!) {
    site {
      siteMetadata {
        title
        subtitle
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
