import React from 'react';
import PropTypes from 'prop-types';

import '../Header.less';

const DesktopHeader = ({ icon, menu }) => (
  <div className="header-component ">
    {icon}
    <div className="menu-items">
      {menu.map(items => (
        <a href={items.link} key={items.link}>
          {items.value.toUpperCase()}
        </a>
      ))}
    </div>
  </div>
);

DesktopHeader.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  menu: PropTypes.array.isRequired,
};

export default DesktopHeader;
