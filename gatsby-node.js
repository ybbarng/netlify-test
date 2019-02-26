const _ = require('lodash');
const path = require('path');

const Author = require('./src/models/author');
const Category = require('./src/models/category');
const Page = require('./src/models/page');
const Post = require('./src/models/post');
const Tag = require('./src/models/tag');

const { getPath } = require('./src/utils');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.jsx')
  });

  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.jsx')
  });

  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-template.jsx')
  });

  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-template.jsx')
  });

  let tags = [];

  await ((resolve, reject) => {
    _.each([Author, Category, Page, Post], (model) => {
      // query data
      graphql(model.query).then((result) => {
        // failed
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // succeeded
        _.each(result.data[`allContentful${model.name}`].edges, (edge) => {
          createPage({
            path: getPath(model, edge.node.slug),
            component: model.component,
            context: {
              id: edge.node.id
            }
          });
          if (model === Post) {
            if (edge.node.tags) {
              tags = tags.concat(edge.node.tags);
            }
          }
        });
        if (model === Post) {
          tags = _.uniq(tags);
          _.each(tags, (tag) => {
            createPage({
              path: getPath(Tag, tag),
              component: Tag.component,
              context: {
                tag
              }
            });
          });
        }
      });
    });
    resolve();
  });
};
