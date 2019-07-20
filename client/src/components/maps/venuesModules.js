//////Modules/////

var querystring = require('querystring')
var request = require('./request');
var config = require('./config')



var credentials = config.credentials;
config = Object.assign({}, config, {
    apiFeature: '/Venues'
});


const categories = function () {
    var urlString = config.apiUrl + config.apiFeature + "/categories?" +
        querystring.stringify(credentials);
    return request(urlString);
}
const explore = function (params) {
    var urlString = config.apiUrl + config.apiFeature + "/explore?" +
        querystring.stringify(params) + '&' +
        querystring.stringify(credentials);
    return request(urlString);

    // var urlString = `${config.apiUrl}${congig.apiFeature}/explore?${queryString.stringify(params)}&${querystring.stringify(credentials)}`
}
const recommendations = function (params) {
    var urlString = config.apiUrl + "/search/recommendations?" +
        querystring.stringify(params) + '&' +
        querystring.stringify(credentials);
    return request(urlString);
}
const trending = function (params) {
    var urlString = config.apiUrl + config.apiFeature + "/trending?" +
        querystring.stringify(params) + '&' +
        querystring.stringify(credentials);
    return request(urlString);
}
const getVenues = function (params) {
    var urlString = config.apiUrl + config.apiFeature + "/search?" +
        querystring.stringify(params) + '&' +
        querystring.stringify(credentials);
    return request(urlString);
}
const getVenue = function (params) {
    var urlString = config.apiUrl + config.apiFeature + "/" +
        params.venue_id + '?' +
        querystring.stringify(credentials);
    return request(urlString);
}
const getVenuePhotos = function (params) {
    var urlString = config.apiUrl + config.apiFeature + "/" +
        params.venue_id + '/photos?' +
        querystring.stringify(credentials);
    return request(urlString);
}
const getVenueTips = function (params) {
    var urlString = config.apiUrl + config.apiFeature + "/" +
        params.venue_id + '/tips?' +
        querystring.stringify(credentials);
    return request(urlString);
}
const suggestCompletion = function (params) {
    var urlString = config.apiUrl + config.apiFeature + "/suggestcompletion?" +
        querystring.stringify(params) + '&' +
        querystring.stringify(credentials);
    return request(urlString);
}



module.exports = {
    categories,
    explore,
    recommendations,
    trending,
    getVenues,
    getVenue,
    getVenuePhotos,
    getVenueTips,
    suggestCompletion
} 
