import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.less';

const Header = ({ icon, menu }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="header-component">
        {icon}
        <FontAwesomeIcon icon="bars" size="lg" onClick={toggleMobileMenu} />
      </div>
      <div className={showMenu ? 'mobile-menu show' : 'mobile-menu hidden'}>
        {menu}
      </div>
    </>
  );
};

Header.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  menu: PropTypes.array.isRequired,
};

export default Header;
