import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './components/Header/Header';

import './App.less';

const App = ({ title }) => {
  const links = [
    { link: '#home', value: 'Home' },
    { link: '#aboutMe', value: 'About me' },
    { link: '#timeline', value: 'Employment Timeline' },
    { link: '#github', value: 'Github Projects' },
  ];

  return (
    <div className="app">
      <Header icon="LD" menu={links} />
      {title}
    </div>
  );
};

App.propTypes = {};

const mapStateToProps = state => ({});

export { App as AppView };

export default connect(mapStateToProps, null)(App);
