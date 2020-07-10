import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.less';

const Header = props => {
  return (
    <div className="header-component">
      Luke Delaney
      <FontAwesomeIcon icon="bars" size="lg" />
    </div>
  );
};

Header.propTypes = {};

export default Header;
