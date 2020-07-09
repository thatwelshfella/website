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
 * Currently this can only used to create components ${folder}/suitable for the components ${folder}/folder,
 * Currently this script generates: less, jsx, test.jsx files,
 * Make sure that the variable you enter starts with a capital letter,
 */

const folderQuestions = [
  'Select what folder you want the new component to go into',
  'If left empty, the default folder is the form folder',
  'required folder: ',
];

const fileQuestions = [
  'This script is used to create a new component for you project',
  'Write the name with any special casing, i.e. home page',
  'File name: ',
];

readline.question(folderQuestions.join('\n'), folder => {
  const defaultFolder = 'form';

  readline.question(fileQuestions.join('\n'), name => {
    console.log('TCL: name', name);
    // TitleCasing names
    const camelCase = _upperFirst(_camelCase(name));
    const kebabCase = _kebabCase(name);

    // Creates folder asyncly
    fs.mkdirSync(`./src/components/${folder || defaultFolder}/${kebabCase}`);

    // Creates the files within the folder

    console.group(
      `Files created in ./src/components/${folder ||
        defaultFolder}/${kebabCase}`
    );
    files(camelCase).forEach(({ extension, content, fileName }) => {
      fs.writeFile(
        `./src/components/${folder || defaultFolder}/${kebabCase}/${fileName ||
          camelCase}.${extension}`,
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
});
