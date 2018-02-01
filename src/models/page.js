const path = require('path');
const slash = require('slash');

const pageTemplate = path.resolve('src/templates/page-template.jsx');

module.exports = {
  name: 'Page',
  pathPrefix: 'pages',
  component: slash(pageTemplate),
  query: `
    {
      allContentfulPage(limit: 1000) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `
};
