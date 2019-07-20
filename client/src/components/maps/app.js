import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as modules from './venuesModules'
import './App.css';


var foursquare = require('react-foursquare')({
  clientID: 'FZBQBUWMSKAWDAMPRQZFJMJBTP0U2OZH1YTF1R4VXZ0S22CD',
  clientSecret: '4TLUI4YQFTUX2SANEPELVTCFOWV0QCU3VHKDOPEBPSV3WV23'
});



export default class FoursquareDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }


  componentDidMount() {
  }

  startSearch = () => {
    var params = {
      "ll": "40.7608,-111.8910",
      "query": this.state.searchTerm,
      "limit": 10
    };
    foursquare.venues.getVenues(params)
      .then(res => {
        this.setState({ items: res.response.venues });
      });
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    console.log("******", modules, "*******")
    const { items } = this.state;
    //var items = this.state.items;
    // const { ... } = this.props;
    if (!items) { // items === null
      return "loading...";
    }
    return (
      <div>
        <div>
          <h1>We found this for you:</h1>
          <input placeholder='category search' value={this.state.searchTerm} onChange={this.handleChange}></input>
          <button onClick={this.startSearch}>search</button>
        </div>
        {items.map(item => { return <div key={item.id}>{item.name}</div> })}
      </div>
    )
  }
}

ReactDOM.render(
  <FoursquareDemo />,
  document.getElementById('root')
);