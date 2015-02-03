
const _ = require('lodash');
const express = require('express');
const setHeader = require('./middlewares/setHeader');
const validate = require('./middlewares/validate');
const router = express.Router();

var filter = function (req, res) {
  var items = req.body.payload;

  var result = _.chain(items)
    .filter(function (item) {
      return item.drm === true && item.episodeCount > 0;
    })
    .map(function (item) {
      return {
        image: item.image ? item.image.showImage : undefined,
        slug: item.slug,
        title: item.title
      };
    })
    .value();

  res.status(200).json({ response: result });
};

router.post('/', [ setHeader, validate ], filter);

module.exports = router;
