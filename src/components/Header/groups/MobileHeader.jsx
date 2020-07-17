import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaBars, FaChevronRight } from 'react-icons/fa';

import '../Header.less';

const MobileHeader = ({ icon, menu }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="header-component">
        {icon}
        <FaBars onClick={toggleMobileMenu} />
      </div>
      <div className={showMenu ? 'mobile-menu show' : 'mobile-menu hidden'}>
        <div
          className={
            showMenu ? 'menu-items container' : 'menu-items container hidden'
          }>
          {menu.map(items => (
            <a href={items.link} onClick={toggleMobileMenu} key={items.link}>
              {items.value.toUpperCase()}
              {`  `}
              <FaChevronRight />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

MobileHeader.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  menu: PropTypes.array.isRequired,
};

export default MobileHeader;
