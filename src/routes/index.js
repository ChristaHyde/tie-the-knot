module.exports = (function () {
  'use strict';

  var router = require('express').Router();
  const venueRoutes = require('./venues')(router)

  return router;
})();