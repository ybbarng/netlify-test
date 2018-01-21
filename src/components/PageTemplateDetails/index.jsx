import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import './style.scss';

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.contentfulPage;

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.title}</h1>
              <div className="page__body" dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageTemplateDetails.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.object.isRequired
  })
};

export default PageTemplateDetails;
