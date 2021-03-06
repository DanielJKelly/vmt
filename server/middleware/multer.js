const _ = require('lodash');

const ggbFileFilter = (req, file, next) => {
  if (!file) {
    return next();
  }
  const originalName = _.propertyOf(file)('originalname');
  let isGgb;
  if (_.isString(originalName)) {
    isGgb = originalName.endsWith('.ggb');
  }

  if (isGgb) {
    console.log('ggb file uploaded');
    return next(null, true);
  }
  console.log('file not supported');

  // TODO:  A better message response to user on failure.
  return next();
};

module.exports.ggbFileFilter = ggbFileFilter;
