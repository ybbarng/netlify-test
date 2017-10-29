import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const group = this.props.data;
    const links = {
      telegram: group.telegram,
      twitter: group.twitter,
      github: group.github,
      vk: group.vk,
      rss: group.rss,
      email: group.email
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={links.twitter}>
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.github}>
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.vk}>
              <i className="icon-vkontakte" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`telegram:${links.telegram}`}>
              <i className="icon-paper-plane" />
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
