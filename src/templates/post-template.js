import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PostTemplateDetails from '../components/PostTemplateDetails';

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const post = this.props.data.contentfulPost;

    let description;
    if (post.description.description !== null) {
      description = post.description.description;
    } else {
      description = subtitle;
    }

    return (
      <div>
        <Helmet>
          <title>{`${post.title} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PostTemplateDetails {...this.props} />
      </div>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    contentfulPost: PropTypes.object.isRequired
  })
};

export default PostTemplate;

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
