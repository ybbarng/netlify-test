import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

import '../assets/scss/init.scss';

const IndexTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;

  const items = [];
  const posts = data.allContentfulPost.edges;
  if (posts) {
    posts.forEach((post) => {
      items.push(
        <Post data={post.node} key={post.node.id} />
      );
    });
  }

  return (
    <Layout
      title={title}
      description={subtitle}
    >
      <Sidebar isIndex />
      <div className="content">
        <div className="content__inner">
          {items}
        </div>
      </div>
    </Layout>
  );
};

IndexTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
      })
    }),
    allContentfulAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired
    }),
    allContentfulPost: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};


export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allContentfulAuthor {
      edges {
        node {
          name
          slug
        }
      }
    }
    allContentfulPost (
      limit: 1000,
      sort: { order: DESC, fields: [datetime] }
    ) {
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

export default IndexTemplate;
