import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import Disqus from '../Disqus/Disqus';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const { author } = post;
    const tags = post.fields.tagSlugs;

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags && tags.map((tag, i) =>
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={tag} className="post-single__tags-list-item-link">
                {post.frontmatter.tags[i]}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus postNode={post} />
      </div>
    );

    return (
      <div>
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="post-single__footer">
            <p className="post-single__footer-text">
              <em className="post-single__date">
                {moment(post.frontmatter.date).format('YYYY년 MM월 DD일')}에&nbsp;
              <a href={author.about}>
                <strong>{author.name}</strong>
              </a>
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
    markdownRemark: PropTypes.object.isRequired
  })
};

export default PostTemplateDetails;
