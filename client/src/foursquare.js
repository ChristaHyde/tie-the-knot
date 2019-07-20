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