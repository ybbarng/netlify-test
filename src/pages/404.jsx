import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import notFoundPic from '../assets/404.jpg';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={'404 - NOT FOUND'} />
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <div className="page__body">
                <img src={notFoundPic} className="page-photo" alt="페이지를 찾을 수 없습니다." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
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
  }
`;
