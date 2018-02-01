import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PageTemplateDetails from '../components/PageTemplateDetails';

class PageTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const { title: pageTitle, description: pageDesciption } = this.props.data.contentfulPage;
    const description = pageDesciption !== null ? pageDesciption.description : subtitle;

    return (
      <div>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PageTemplateDetails {...this.props} />
      </div>
    );
  }
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    contentfulPage: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  })
};

export default PageTemplate;

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
