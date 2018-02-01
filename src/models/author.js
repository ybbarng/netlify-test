const path = require('path');
const slash = require('slash');

const authorTemplate = path.resolve('src/templates/author-template.jsx');

module.exports = {
  name: 'Author',
  pathPrefix: 'authors',
  component: slash(authorTemplate),
  query: `
    {
      allContentfulAuthor(limit: 1000) {
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
