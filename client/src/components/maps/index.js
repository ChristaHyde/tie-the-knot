var configService = require('./config');
// API Features
var venues = require('./venuesModules');

module.exports = function(settings){
  var config = configService.getConfig(settings);
  var foursquare = {
    venues: venues(config)
  };
  return foursquare;
};