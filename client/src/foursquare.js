import TaskListPage from './pages/TaskListPage';

var foursquare = require('react-foursquare')({
  clientID: 'FZBQBUWMSKAWDAMPRQZFJMJBTP0U2OZH1YTF1R4VXZ0S22CD',
  clientSecret: '4TLUI4YQFTUX2SANEPELVTCFOWV0QCU3VHKDOPEBPSV3WV23'
});

export default foursquare;


export const getVenues = (params) => {
  // see: https://developer.foursquare.com/docs/api/venues/search
  // categories: https://developer.foursquare.com/docs/resources/categories
  params = {
    "ll": "40.7608,-111.8910",
    "limit": 10,
    ...params
  };


  return foursquare.venues.getVenues(params)
    .then(res => {
      console.log('venues', res.response);
      return res.response.venues;
    });
}

export const getVenuePhotos = (params) => {
  // see: https://developer.foursquare.com/docs/api/venues/search
  // categories: https://developer.foursquare.com/docs/resources/categories
  params = {
    //"venue_id": 
    ...params
  };


  return foursquare.venues.getVenuePhotos(params)
    .then(res => {
      //console.log('photos', res.response);
      let { photos } = res.response;
      if (!photos) {
        return ['https://image.freepik.com/free-vector/wedding-couple-flat-design-illustration_1390-393.jpg'];
      }

      photos = photos.items;
      return photos.map(photo => {
        // const prefix = photo.prefix;
        // const suffix = photo.suffix;
        const { prefix, suffix } = photo;
        const url = prefix + 'original' + suffix;
        return url;
      });
    });
}