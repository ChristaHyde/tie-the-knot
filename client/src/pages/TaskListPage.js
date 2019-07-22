import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { putData } from '../util/fetch-util';
import Flexbox from 'flexbox-react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';
import Container from 'react-bootstrap/Container'




async function getTasks(userId) {
  const res = await fetch(`api/venues/${userId}`);
  return await res.json();
}

async function updateVenue(id, updateData) {
  try {
    const url = '//localhost:3001/api/venues/' + id;
    const result = await putData(url, updateData);
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
      <div>{!tasks &&
        "loading..." ||
        tasks.map(task => (
          <Flexbox key={task._id}>

            <Form.Check inline id={task._id} type="checkbox" label={task.name}
              checked={!!task.checked}
              onChange={this.handleChange} />

          </Flexbox>
        ))
      }</div>
    </Container>);

  }
}



