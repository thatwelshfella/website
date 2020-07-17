import React from 'react';
import PropTypes from 'prop-types';

import MobileHeader from './groups/MobileHeader';
import DesktopHeader from './groups/DesktopHeader';

import './Header.less';

const Header = ({ icon, menu }) => {
  return (
    <>
      <div className="mobile">
        <MobileHeader icon={icon} menu={menu} />
      </div>

      <div className="desktop">
        <DesktopHeader icon={icon} menu={menu} />
      </div>
    </>
  );
};

Header.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  menu: PropTypes.array.isRequired,
};

export default Header;
