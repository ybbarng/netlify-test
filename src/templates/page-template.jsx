import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PageTemplateDetails from '../components/PageTemplateDetails';

const PageTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { title: pageTitle, description: pageDesciption } = data.contentfulPage;
  const description = pageDesciption !== null ? pageDesciption.description : subtitle;

  return (
    <Layout title={`${pageTitle}|${title}`} description={description}>
      <PageTemplateDetails
        page={data.contentfulPage}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    contentfulPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  }).isRequired
};

export const pageQuery = graphql`
  query PageBySlug($id: String!) {
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
    contentfulPage (id: { eq: $id }) {
      title
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default PageTemplate;
