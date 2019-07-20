import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { getVenues } from '../../foursquare';

import './styles.css'
import { postData } from '../../util/fetch-util';


async function saveVenue(venueData) {
  // TODO: add proper userId
  venueData.userId = '0';
  try {
    const result = await postData('//localhost:3001/api/venues', venueData);
    console.log('finished saveVenue:', result);
    return true;
  }
  catch (err) {
    console.error(err);
    return false;
  }
}

export function VenuItem({ venue, overVenueId, handleOverVenue }) {
  const { id, name, location: { address, lat, lng } } = venue;
  return (<div className="venue-item"
    onPointerEnter={() => handleOverVenue(id)}
    onPointerLeave={() => handleOverVenue(null)}
    onClick={async () => {
      if (window.confirm("Would you like to add this venue to your list?")) {
        const result = await saveVenue({
          venueId: id,
          name,
          lat,
          lng
        });
        if (result) {
          window.alert("This venue has been added to your Task List!");
        }
        else {
          window.alert("Could not save to Task List");
        }


      }
    }}
  >{name} - {address}</div>);
}

export class VenuesCard extends Component {
  state = {
    searchTerm: '',
    venues: [],
    overItemId: null
  };
  componentDidMount() {

  }

  startSearch = (event) => {
    var { categoryId } = this.props;
    const params = {
      query: this.state.searchTerm,
      categoryId: categoryId
    };
    getVenues(params).then((venues) => {
      this.setState({ venues })
    });
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleOverVenue = (id) => {
    this.setState({ overVenueId: id })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.startSearch()
  }

  render() {
    var venues = this.state.venues;
    return (<WeddingCard {...this.props}>
      {
        !venues && "loading..." || venues.map(item => (
          <VenuItem
            key={item.id}

            venue={item}
            overVenueId={this.state.overVenueId}
            handleOverVenue={this.handleOverVenue}
          />
        ))}
      <form onSubmit={this.handleSubmit}>
        <input placeholder='category search' value={this.state.searchTerm} onChange={this.handleChange}></input>
        <button onClick={this.startSearch}>search</button>
      </form>
    </WeddingCard>);
  }
}

class WeddingCard extends Component {
  state = {};

  render() {
    var { header, title, children } = this.props;
    //var title = this.props.title;
    return (<Card className="full-width" border="primary">
      <Card.Header>{header || "(no title)"}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
    );

  }
}

export default WeddingCard;
