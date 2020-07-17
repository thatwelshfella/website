import React from 'react';
import { shallow } from 'enzyme';
import MobileHeader from './MobileHeader';

describe('<MobileHeader />', () => {
  const menu = [
    { link: '#home', value: 'Home' },
    { link: '#aboutMe', value: 'About me' },
    { link: '#timeline', value: 'Employment Timeline' },
    { link: '#github', value: 'Github Projects' },
  ];

  const cmp = shallow(<MobileHeader icon="LD" menu={menu} />);

  describe('@renders', () => {
    it('should render with mobile header ', () => {
      expect(cmp).toMatchSnapshot();
    });
  });

  describe('@actions', () => {
    it('should toggle open the mobile menu', () => {
      const menu = cmp.find('FaBars').first();

      menu.simulate('click');

      expect(cmp.find('[className="mobile-menu show"]').length).toEqual(1);
    });
  });
});
