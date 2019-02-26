import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import { getPath } from '../utils';
import Tag from '../models/tag';

class TagsRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const tags = this.props.data.allContentfulPost.group;

    return (
      <div>
        <Helmet title={`All Tags - ${title}`} />
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Tags</h1>
              <div className="page__body">
                <div className="tags">
                  <ul className="tags__list">
                    {tags.map(tag =>
                      <li key={tag.fieldValue} className="tags__list-item">
                        <Link to={getPath(Tag, `${tag.fieldValue}`)} className="tags__list-item-link">
                          {tag.fieldValue} ({tag.totalCount})
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

TagsRoute.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }),
    allContentfulPost: PropTypes.shape({
      group: PropTypes.array.isRequired
    })
  })
};

export default TagsRoute;

export const pageQuery = graphql`
  query TagsQuery {
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
    allContentfulPost (limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
