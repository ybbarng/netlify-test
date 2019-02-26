import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

const AuthorTemplate = ({ data }) => {
  const { title: siteName, subtitle } = data.site.siteMetadata;
  const { name, post: posts } = data.contentfulAuthor;
  const title = `${name}가 쓴 글`;

  return (
    <Layout title={`${title}|${siteName}`} description={subtitle}>
      <Sidebar />
      <Posts
        title={title}
        posts={posts}
      />
    </Layout>
  );
};

AuthorTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    contentfulAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      post: PropTypes.array
    })
  }).isRequired
};

export const pageQuery = graphql`
  query AuthorPage ($id: String!) {
    site {
      siteMetadata {
        title
        subtitle
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

export default AuthorTemplate;
