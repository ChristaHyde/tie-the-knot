import React from 'react'
import Flexbox from 'flexbox-react'
import WeddingCard, { VenuesCard } from '../../components/card'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './style.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"




const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <p>
              "Marriage - an endless sleepover with your favorite weirdo"
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">GitHub Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/marcelinaov">Marcelina Ortiz</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/ChristaHyde">Christa Hyde</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li> */}
              {/* <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          {/* &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

// export default FooterPage;


export default function LoggedOut() {

  return (<>

    <Container>

      <Jumbotron>
        <h1>Welcome to Tie The Knot!</h1>
        <p>
          {/* Don't have your own personal wedding planner?  Well look no further because Tie The Knot is here to take away your wedding planning blues!  Here you can search for the best local vendors and then manage the ones you want to go check out. */}
        </p>
        <p>
          {/* <Button variant="primary">Learn more</Button> */}
        </p>
      </Jumbotron>

      <Flexbox className="full-width" flexDirection="column"> { /* container */}
        <Flexbox className="venue-card"> {/* first item */}
          <VenuesCard className="venue-card" header="Wedding Venues" title="Search Venues"
            categoryId="56aa371be4b08b9a8d5734c5,4bf58dd8d48988d171941735" // wedding halls, event spaces
          />
        </Flexbox>
        <Flexbox className="flex-card"> {/* second item */}
          <VenuesCard header="Cake Shops" title="Find Your Perfect Cake"
            categoryId="4bf58dd8d48988d1d0941735,4bf58dd8d48988d16a941735" />
        </Flexbox>
        <Flexbox className="flex-card"> {/* sixth item */}
          <VenuesCard header="Catering" title="Search for Your Caterer"
            categoryId="4d4b7105d754a06374d81259" />
        </Flexbox>
        <Flexbox className="flex-card"> {/* fourth item */}
          <VenuesCard header="Dress Shops" title="Find Your Dream Dress"
            categoryId="4bf58dd8d48988d11a951735" />
        </Flexbox >
        <Flexbox className="flex-card"> {/* fifth item */}
          <VenuesCard header="Floral Shops" title="Choose Your Florist"
            categoryId="4bf58dd8d48988d11b951735" />
        </Flexbox>
        <Flexbox className="flex-card"> {/* third item */}
          <VenuesCard header="Jewelery" title="Choose Your Jewelery Shop"
            categoryId="4bf58dd8d48988d111951735" />
        </Flexbox>
      </Flexbox>

      {/* I am not logged in */}
    </Container>
    <FooterPage></FooterPage>
  </>)

}