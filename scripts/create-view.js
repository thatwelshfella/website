const fs = require('fs');
const readline = require('readline').Interface({
  input: process.stdin,
  output: process.stdout,
});
const files = require('./templates/viewFileTemplates');
const _camelCase = require('lodash.camelcase');
const _kebabCase = require('lodash.kebabcase');
const _upperFirst = require('lodash.upperfirst');

/**
 * Currently this can only used to create components suitable for the components folder,
 * Currently this script generates: less, jsx, test.jsx files,
 * Make sure that the variable you enter starts with a capital letter,
 */

const question = [
  'This script is used to create a new component for you project',
  'Write the name with any special casing, i.e. home page',
  'what is the file name?',
];

readline.question(question.join('\n'), name => {
  // TitleCasing names
  const camelCase = _upperFirst(_camelCase(name));
  const kebabCase = _kebabCase(name);

  // Creates folder asyncly
  fs.mkdirSync(`./src/views/${kebabCase}`);

  // Creates the files within the folder

  console.group(`Files created in ./src/views/${kebabCase}`);
  files(camelCase).forEach(({ extension, content, fileName }) => {
    fs.writeFile(
      `./src/views/${kebabCase}/${fileName || camelCase}.${extension}`,
      content || '',
      err => {
        if (err) throw err;
        console.log(`${fileName || camelCase}.${extension}`);
      }
    );
  });
  console.groupEnd();

  readline.close();
});
