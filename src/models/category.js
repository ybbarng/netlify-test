const path = require('path');
const slash = require('slash');

const categoryTemplate = path.resolve('src/templates/category-template.jsx');

module.exports = {
  name: 'Category',
  pathPrefix: 'categories',
  component: slash(categoryTemplate),
  query: `
    {
      allContentfulCategory(limit: 1000) {
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
