import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';

import './App.less';

const App = () => {
  const links = [
    { link: '#home', value: 'Home' },
    { link: '#aboutMe', value: 'About me' },
    { link: '#timeline', value: 'Employment Timeline' },
    { link: '#github', value: 'Github Projects' },
  ];

  return (
    <div className="app">
      <Header icon="LD" menu={links} />
    </div>
  );
};

App.propTypes = {};

export { App as AppView };

export default App;
