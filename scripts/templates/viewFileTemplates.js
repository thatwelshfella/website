const files = name => [
  {
    extension: 'jsx',
    content: `import React from 'react';
import PropTypes from 'prop-types';
import './${name}.less';

const ${name} = () => {
    return (
      <div>${name} has been created</div>
    );
};

${name}.propTypes = {};

export default ${name};`,
  },
  {
    extension: 'test.jsx',
    content: `import React from 'react';
import { shallow } from 'enzyme'
import ${name} from './${name}'

describe('<${name} />', () => {
    describe('@render',()=>{
        it('should render by default',()=>{
            const cmp = shallow(<${name} />)
            expect(cmp).toMatchSnapshot()
        })
    })
})`,
  },
  { extension: 'less' },
];

module.exports = files;
