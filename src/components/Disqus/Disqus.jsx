import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';
import config from '../../../gatsby-config';
import { getPath } from '../../utils';
import Post from '../../models/post';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: 'New comment available!!' });
    this.setState({ toasts });
  }
  render() {
    const { post } = this.props;
    if (!config.siteMetadata.disqusShortname) {
      return null;
    }
    const url = config.siteMetadata.url + encodeURI(getPath(Post, post.slug));
    return (
      <ReactDisqusComments
        shortname={config.siteMetadata.disqusShortname}
        identifier={post.datetime}
        title={post.title}
        url={url}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

Disqus.propTypes = {
  post: PropTypes.object.isRequired
};

export default Disqus;
