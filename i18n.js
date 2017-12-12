// mocking i18n
exports.t = (text) => {
  switch (text) {
    case 'common.title': return 'It\'s great';
    case 'common.header': return 'I Love Pug';
    case 'common.paragraph': return 'It\'s a great';
    default: return '';
  }
};
