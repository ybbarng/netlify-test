import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import './style.scss';
import { getPath } from '../../utils';
import Category from '../../models/category';
import Author from '../../models/author';
import PostModel from '../../models/post';

class Post extends React.Component {
  render() {
    const data = this.props.data;
    const post = {
      title: data.title,
      slug: data.slug,
      author: data.author,
      datetime: data.datetime,
      category: data.category,
      description: data.description ? data.description.childMarkdownRemark.html : ''
    };
    // Contentful에 Locale을 추가했을 때, 이 값들이 null인 것들이 목록에
    // 보이는 버그에 대한 workaround
    if (!post.title || !post.slug || !post.author || !post.category) {
      return (null);
    }

    return (
      <div className="post">
        <div className="post__meta">
          <time className="post__meta-time" dateTime={moment(post.datetime).format('MMMM D, YYYY')}>
            {moment(post.datetime).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          <span className="post__meta-category" key={post.category.id}>
            <Link to={getPath(Category, post.category.slug)} className="post__meta-category-link">
              {post.category.name}
            </Link>
          </span>
          <span className="post__meta-author">
            <Link to={getPath(Author, post.author.slug)} className="post__meta-author-link">
              {post.author.name}
            </Link>
          </span>
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={getPath(PostModel, post.slug)}>{post.title}</Link>
        </h2>
        <div className="post__description" dangerouslySetInnerHTML={{ __html: post.description }} />
        <Link className="post__readmore" to={getPath(PostModel, post.slug)}>Read</Link>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;
