import React, { Component } from 'react';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';

class Moment extends Component {
	constructor(props){
		super(props);
		this.state = {
			// deadLine: 'December 31, 2019',
			newDeadLine: ''
		}
	}

	changeDeadLine(){
		console.log('state', this.state);	
		this.setState({deadLine: this.state.newDeadLine})	
	}

	render() {
		return (
			
				
			<div className="App">
				<div className="content">
					<div className="App-title">Days until we say......I DO!! {this.state.deadLine}</div>
					<Clock 
						deadLine={this.state.deadLine}
					/>
					<Form inline>
						<FormControl
							className="Deadline-input" 
							placeholder='MM/DD/YYYY'
							onChange={event => this.setState({newDeadLine: event.target.value})} 
						/>
						<Button onClick={() => this.changeDeadLine()}>Submit</Button>
					</Form>
					</div>
				</div>
			
		)
	}
}

export default Moment;