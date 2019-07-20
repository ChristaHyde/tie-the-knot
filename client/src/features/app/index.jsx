import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.css';
import NavBar from "../../components/NavBar";
import PrivateRoute from "../../components/PrivateRoute";
import Profile from "../../components/Profile";
import Homepage from '../homepage';

// added route for places api
import Maps from '../../components/maps/app';
////added countdown to check if it works////

import Moment from '../../components/countdown/Moment';
// import Moment from '../../components/countdown/Moment';
// import Moment from "../../components/countdown/Moment";

import TaskListPage from '../../pages/TaskListPage';


export default function App({ foo }) {
  return <BrowserRouter>
    <header>
      <NavBar />
    </header>
    <Switch>
      {/* added route for maps api */}
      <Route exact path="/Moment" component={Moment} />
      <Route exact path="/app" component={Maps} />
      <Route exact path="/" component={Homepage} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route exact path="/task-list" component={TaskListPage} />
    </Switch>
  </BrowserRouter>
}

