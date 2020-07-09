import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.less';

const App = ({ title }) => {
  return <div className="app">{title}</div>;
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    title: state.title,
  };
};

export { App as AppView };

export default connect(mapStateToProps, null)(App);
