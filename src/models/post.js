const path = require('path');
const slash = require('slash');
const moment = require('moment');

const postTemplate = path.resolve('src/templates/post-template.jsx');

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
  `,
  sort: (a, b) => moment(a.datetime).diff(moment(b.datetime))
};
