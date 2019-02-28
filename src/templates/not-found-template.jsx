import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';


const NotFoundTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { notFoundImage } = data;

  return (
    <Layout title={`Not Found|${title}`} description={subtitle}>
      <Sidebar />
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <div className="page__body">
              <Img
                title="페이지를 찾을 수 없습니다."
                alt="페이지를 찾을 수 없습니다."
                className="page-photo"
                sizes={notFoundImage.sizes}
              />
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
    notFoundImage: imageSharp(original: { src: { regex: "/404/" } }) {
      sizes(maxWidth: 633, quality: 100) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;

export default NotFoundTemplate;
