import React from 'react';
import { AppView } from './App';
import { shallow } from 'enzyme';

describe('@render', () => {
  const requiredProps = {
    title: 'webpack boiler',
  };
  it('renders without crashing', () => {
    expect(shallow(<AppView {...requiredProps} />)).toMatchSnapshot();
  });
});
