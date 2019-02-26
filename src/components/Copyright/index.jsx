import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Copyright = ({ copyright }) => (
  <p className={'copyright'}>
    {copyright}
  </p>
);

Copyright.propTypes = {
  copyright: PropTypes.string.isRequired
};

export default Copyright;
