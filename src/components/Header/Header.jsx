import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.less';

const Header = props => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="header-component">
        Luke Delaney
        <FontAwesomeIcon icon="bars" size="lg" onClick={toggleMobileMenu} />
      </div>
      <div className={showMenu ? 'mobile-menu show' : 'mobile-menu hidden'}>
        hidden content
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
