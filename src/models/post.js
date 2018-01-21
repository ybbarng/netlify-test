const path = require('path');
const slash = require('slash');

const postTemplate = path.resolve('src/templates/post-template.js');

module.exports = {
  name: 'Post',
  pathPrefix: 'posts',
  component: slash(postTemplate),
  query: `
    {
      allContentfulPost(limit: 1000) {
        edges {
          node {
            id
            slug
            tags
          }
        }
      }
    }
  `
};
