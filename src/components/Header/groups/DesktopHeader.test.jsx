import React from 'react';
import { shallow } from 'enzyme';
import DesktopHeader from './DesktopHeader';

describe('<DesktopHeader />', () => {
  const menu = [
    { link: '#home', value: 'Home' },
    { link: '#aboutMe', value: 'About me' },
    { link: '#timeline', value: 'Employment Timeline' },
    { link: '#github', value: 'Github Projects' },
  ];

  const cmp = shallow(<DesktopHeader icon="LD" menu={menu} />);

  describe('@renders', () => {
    it.only('should render with desktop header ', () => {
      expect(cmp).toMatchSnapshot();
    });
  });
});
