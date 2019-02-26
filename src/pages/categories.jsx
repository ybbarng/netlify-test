import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import { getPath } from '../utils';
import Category from '../models/category';

class CategoriesRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    // Contentful에 Locale을 추가했을 때, allContentfulCategory 대신에
    // 번역의 contentCategory가 오는 버그에 대한 workaround
    if (!this.props.data.allContentfulCategory) {
      return (null);
    }
    const categories = this.props.data.allContentfulCategory.edges;

    return (
      <div>
        <Helmet title={`All Categories - ${title}`} />
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Categories</h1>
              <div className="page__body">
                <div className="categories">
                  <ul className="categories__list">
                    {categories.map(category =>
                      <li key={category.node.name} className="categories__list-item">
                        <Link to={getPath(Category, `/${category.node.slug}/`)} className="categories__list-item-link">
                          {category.node.name} ({category.node.post ? category.node.post.length : 0})
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoriesRoute.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }),
    allContentfulCategory: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  })
};

export default CategoriesRoute;

export const pageQuery = graphql`
  query CategoriesQuery {
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
    allContentfulCategory (limit: 2000) {
      edges {
        node {
          name
          slug
          post {
            id
          }
        }
      }
    }
  }
`;
