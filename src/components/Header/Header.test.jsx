import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  const menu = [
    { link: '#home', value: 'Home' },
    { link: '#aboutMe', value: 'About me' },
    { link: '#timeline', value: 'Employment Timeline' },
    { link: '#github', value: 'Github Projects' },
  ];

  const cmp = shallow(<Header icon="LD" menu={menu} />);

  describe('@renders', () => {
    it.only('should render with mobile and desktop headers ', () => {
      expect(cmp).toMatchSnapshot();
    });
  });
});
