import React from 'react';
import PropTypes from 'prop-types';

import PostView from '../Post';

import PostModel from '../../models/post';

const Posts = ({ title, posts }) => {
  const postViews = [];
  if (posts) {
    posts.sort(PostModel.sort).reverse();
    posts.forEach((post) => {
      postViews.push(
        <PostView data={post} key={post.id} />
      );
    });
  }

  return (
    <div className="content">
      <div className="content__inner">
        <div className="page">
          <h1 className="page__title">
            {title}
          </h1>
          <div className="page__body">
            {postViews}
          </div>
        </div>
      </div>
    </div>
  );
};

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
};

export default Posts;
