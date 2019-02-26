import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PostTemplateDetails from '../components/PostTemplateDetails';

const PostTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { title: postTitle, description: postDesciption } = data.contentfulPost;
  const postCategory = data.contentfulPost.category.name;
  const description = postDesciption !== null ? postDesciption.description : subtitle;

  return (
    <Layout title={`${postTitle} - ${postCategory}|${title}`} description={description}>
      <PostTemplateDetails
        post={data.contentfulPost}
        footer={subtitle}
        siteMetadata={data.site.siteMetadata}
      />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    contentfulPost: PropTypes.object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        authors {
          id
          name
          about
        }
        disqusShortname
        url
      }
    }
    contentfulPost (id: { eq: $id }) {
      title
      slug
      author {
        name
        slug
      }
      datetime
      category {
        name
        slug
      }
      tags
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default PostTemplate;
