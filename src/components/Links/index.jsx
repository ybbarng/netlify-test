import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import '../../assets/fonts/fontello-3d8dd48a/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      github: author.github,
      email: author.email,
      keybase: author.keybase,
      facebook: author.facebook,
      twitter: author.twitter,
      rss: author.rss
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.github.com/${links.github}`} target="_blank" rel="noopener noreferrer">
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://keybase.io/${links.keybase}`} target="_blank" rel="noopener noreferrer">
              <i className="icon-key" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.facebook.com/${links.facebook}`} target="_blank" rel="noopener noreferrer">
              <i className="icon-facebook" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" rel="noopener noreferrer">
              <i className="icon-twitter" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Links.propTypes = {
  data: PropTypes.object.isRequired
};

export default Links;
