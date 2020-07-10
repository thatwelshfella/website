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
    it('should render with the correct number of links', () => {
      expect(
        cmp.find("[className='menu-items-container hidden']").children().length
      ).toEqual(menu.length);
    });
  });

  describe('@actions', () => {
    it('should toggle open the mobile menu', () => {
      const menu = cmp.find('FontAwesomeIcon').first();

      menu.simulate('click');

      expect(cmp.find('[className="mobile-menu show"]').length).toEqual(1);
    });
  });
});
