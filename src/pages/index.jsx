import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allContentfulPost.edges;
    if (posts) {
      posts.forEach((post) => {
        items.push(
          <Post data={post.node} key={post.node.id} />
        );
      });
    }

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            {items}
          </div>
        </div>
      </div>
    );
  }
}

IndexRoute.propTypes = {
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
  })
};

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        group {
          name
        }
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
