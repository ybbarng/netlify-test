const _ = require('lodash');
const Promise = require('bluebird');
const lost = require('lost');
const pxtorem = require('postcss-pxtorem');

const Author = require('./src/models/author');
const Category = require('./src/models/category');
const Page = require('./src/models/page');
const Post = require('./src/models/post');
const Tag = require('./src/models/tag');

const { getPath } = require('./src/utils');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  let tags = [];

  return new Promise((resolve, reject) => {
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

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    postcss: [
      lost(),
      pxtorem({
        rootValue: 16,
        unitPrecision: 5,
        propList: [
          'font',
          'font-size',
          'line-height',
          'letter-spacing',
          'margin',
          'margin-top',
          'margin-left',
          'margin-bottom',
          'margin-right',
          'padding',
          'padding-top',
          'padding-left',
          'padding-bottom',
          'padding-right',
          'border-radius',
          'width',
          'max-width'
        ],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      })
    ]
  });
};
