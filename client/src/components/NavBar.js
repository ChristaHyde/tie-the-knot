// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../providers/auth0";
// NEW - import the Link component
import { Link } from "react-router-dom";
// import Maps from '../components/maps/app';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


// {isAuthenticated && (
//         <span>
//            <Link to="/">Home</Link>&nbsp;
//         <Link to="/profile">Profile</Link>
//         {/* added link for places api */}
//       {/* <Link to="/app">Search</Link>*/}
//         {/* added link to countdown */}
//       {/* <Link to="/Moment">Countdown</Link> */}

const LogInLogOutButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() =>
          loginWithRedirect({})
        }
      >
        Log in
      </button>
    ) ||
    (<button onClick={() => logout()}>Log out</button>)
  );
};

function MyNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/task-list">Task List</Nav.Link>
          <Nav.Link to="/Moment">Countdown</Nav.Link>
          {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
          <Nav.Link to="/app">Search</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <LogInLogOutButton />
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>)
}

export default MyNavBar;