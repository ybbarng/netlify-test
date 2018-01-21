const path = require('path');
const slash = require('slash');

const tagTemplate = path.resolve('src/templates/tag-template.js');

module.exports = {
  name: 'Tag',
  pathPrefix: 'tags',
  component: slash(tagTemplate),
  query: `
    {
      allContentfulTag(limit: 1000) {
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
