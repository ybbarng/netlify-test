import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

class AuthorTemplateDetails extends React.Component {
  render() {
    const items = [];
    const author = this.props.data.contentfulAuthor;
    if (author.post) {
      author.post.forEach((post) => {
        items.push(
          <Post data={post} key={post.id} />
        );
      });
    }

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">
              {author.name}가 쓴 글
            </h1>
            <div className="page__body">
              {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AuthorTemplateDetails.propTypes = {
  data: PropTypes.shape({
    contentfulAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      post: PropTypes.object.isRequired
    })
  })
};

export default AuthorTemplateDetails;
