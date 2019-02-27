import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import notFoundPic from '../assets/images/404.jpg';

const NotFoundTemplate = ({ data }) => {
  console.log(data);
  const { title, subtitle } = data.site.siteMetadata;

  return (
    <Layout title={`Not Found|${title}`} description={subtitle}>
      <Sidebar />
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <div className="page__body">
              <img src={notFoundPic} className="page-photo" alt="페이지를 찾을 수 없습니다." />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
