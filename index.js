const fs = require('fs');
const pug = require('pug');
const walk = require('pug-walk');

const i18n = require('./i18n');

const code = fs.readFileSync(__dirname + '/index.pug');

const html = pug.render(code, {
  plugins: [{
    postParse: function (ast) {
      return walk(ast, (node) => {
        if (node.type === 'Text') {
          node.val = i18n.t(node.val);
        }
      });
    }
  }]
});

console.log(html);
