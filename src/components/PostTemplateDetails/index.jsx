import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import Disqus from '../Disqus/Disqus';
import './style.scss';
import { getPath } from '../../utils';
import Author from '../../models/author';
import Tag from '../../models/tag';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle } = this.props.data.site.siteMetadata;
    const post = this.props.data.contentfulPost;
    const { author, tags } = post;

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags && tags.map(tag =>
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={getPath(Tag, tag)} className="post-single__tags-list-item-link">
                {tag}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus post={post} />
      </div>
    );

    return (
      <div>
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
          </div>
          <div className="post-single__footer">
            <p className="post-single__footer-text">
              <em className="post-single__date">
                {moment(post.datetime).format('YYYY년 MM월 DD일')}에&nbsp;
              <Link to={getPath(Author, author.slug)}>
                <strong>{author.name}</strong>
              </Link>
              가 씀.
              </em>
            </p>
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
              {subtitle}
            </p>
            {commentsBlock}
          </div>
        </div>
      </div>
    );
  }
}

PostTemplateDetails.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        subtitle: PropTypes.string.isRequired
      })
    }),
    contentfulPost: PropTypes.object.isRequired
  })
};

export default PostTemplateDetails;
