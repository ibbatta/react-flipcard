const path = require('path');

module.exports = {
  CONTEXT: path.join(__dirname, ''),
  DIST: path.join(__dirname, '../dist'),
  SRC: path.join(__dirname, '../src'),
  INDEX_HTML: path.join(__dirname, '../src/index.html'),
  INDEX_JS: path.join(__dirname, '../src/index.jsx'),
};
