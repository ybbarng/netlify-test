import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

class TagTemplateDetails extends React.Component {
  render() {
    const items = [];
    const tag = this.props.pathContext.tag;
    const posts = this.props.data.allContentfulPost.edges;
    if (posts) {
      posts.forEach((post) => {
        items.push(
          <Post data={post.node} key={post.node.id} />
        );
      });
    }

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">
              All Posts tagget as &quot;{tag}&quot;
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

TagTemplateDetails.propTypes = {
  data: PropTypes.shape({
    allContentfulPost: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }),
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  })
};

export default TagTemplateDetails;
