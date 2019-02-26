import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { getPath } from '../utils';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import Tag from '../models/tag';

const TagsTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const tags = data.allContentfulPost.group;

  return (
    <Layout title={`모든 태그|${title}`} description={subtitle}>
      <Sidebar />
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">태그</h1>
            <div className="page__body">
              <div className="tags">
                <ul className="tags__list">
                  {tags.map(tag => (
                    <li key={tag.fieldValue} className="tags__list-item">
                      <Link to={getPath(Tag, `${tag.fieldValue}`)} className="tags__list-item-link">
                        {tag.fieldValue} ({tag.totalCount})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

TagsTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    allContentfulPost: PropTypes.shape({
      group: PropTypes.array.isRequired
    })
  }).isRequired
};

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
        subtitle
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

export default TagsTemplate;
