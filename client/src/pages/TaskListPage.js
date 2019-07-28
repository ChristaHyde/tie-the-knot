import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { putData, getData } from '../util/fetch-util';
import Flexbox from 'flexbox-react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';
import Container from 'react-bootstrap/Container'
import { getVenuePhotos } from '../foursquare';
import { Card, Button } from 'react-bootstrap';

async function getTasks(userId) {
  return await getData(`api/venues/${userId}`);
}



async function updateVenue(id, updateData) {
  try {
    const result = await putData(`api/venues/${id}`, updateData);
    console.log('finished updateVenue:', result);
    return result;
  }
  catch (err) {
    console.error(err);
    return false;
  }
}

export default class TaskListPage extends Component {
  state = {};

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const tasks = await getTasks("0"); // TODO: add proper userId!
    this.setState({ tasks });

    const photoUrls = await Promise.all(
      tasks.map(task => (getVenuePhotos({ venue_id: task.venueId })))
    );
    this.setState({ photoUrls });
  }

  handleChange = async (event) => {
    const id = event.target.id;
    const updateData = { checked: event.target.checked };
    await updateVenue(id, updateData);
    this.loadData();
  }


  render() {
    var tasks = this.state.tasks;

    return (<Container>
      <Jumbotron>
        <h1>
          Task List ({tasks && tasks.length})
      </h1>
      </Jumbotron>
      <Flexbox flexWrap="wrap" justifyContent='space-between'>{!tasks &&
        "loading..." ||
        tasks.map((task, i) => {
          const allPhotoUrls = this.state.photoUrls || [];
          const photoUrls = allPhotoUrls[i] || [];
          const photoUrl = photoUrls[0]
          return (<Flexbox flexGrow="0" style={{ maxWidth: '20rem' }} key={task._id}>

            <Card style={{ width: '100%' }} >
              <Card.Img variant="top" src={photoUrl} />
              <Card.Body>
                <Card.Title>{task.name}</Card.Title>
                <Card.Text>
                  <Form.Check inline id={task._id} type="checkbox"
                    label={"Done!"}
                    checked={!!task.checked}
                    onChange={this.handleChange} />

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>



          </Flexbox>);
        })
      }</Flexbox>
    </Container>);

  }
}