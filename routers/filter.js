
const _ = require('lodash');
const express = require('express');
const validate = require('./middlewares/validate');
const router = express.Router();

var filter = function (req, res, next) {
  var items = req.body.payload;

  console.log('items', items.length);
  var result = _.chain(items)
    .filter(function (item) {
      return item.drm && item.episodeCount > 0;
    })
    .map(function (item) {
      return {
        image: item.image.showImage,
        slug: item.slug,
        title: item.title
      };
    })
    .value();

  // console.log('data', data);
  console.log('result', result);
  res.status(200).json({ response: result });
};

router.post('/', [ validate ], filter);

module.exports = router;
