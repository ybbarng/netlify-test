import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import './style.scss';

const PageTemplateDetails = ({ page }) => (
  <div>
    <Sidebar />
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

PageTemplateDetails.propTypes = {
  page: PropTypes.object.isRequired
};

export default PageTemplateDetails;
