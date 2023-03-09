const path = require('path');

const buildEslintCommand = () => 'yarn lint --fix';

const buildPrettierCommand = () => 'yarn format:write';

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
};
