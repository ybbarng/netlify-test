import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PostTemplateDetails from '../components/PostTemplateDetails';

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, authors } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const author = authors.find(authorData => authorData.id === post.frontmatter.authorId);
    post.author = author;

    let description;
    if (post.frontmatter.description !== null) {
      description = post.frontmatter.description;
    } else {
      description = subtitle;
    }

    return (
      <div>
        <Helmet>
          <title>{`${post.frontmatter.title} - ${title}`}</title>
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
        subtitle: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
      })
    }),
    markdownRemark: PropTypes.object.isRequired
  })
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        authors {
          id
          name
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        authorId
        description
      }
    }
  }
`;
