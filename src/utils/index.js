const _ = require('lodash');

exports.getPath = (model, key) => `/${model.pathPrefix}/${_.kebabCase(key)}/`;
