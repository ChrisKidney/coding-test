import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import logo from '../logo.svg';
import threedotsicon from '../assets/three-dots-icon.svg';
import peopleicon from '../assets/people-icon.svg';
import helpicon from '../assets/help-icon.svg';
import mapicon from '../assets/map-icon.svg';
import leaderboardsicon from '../assets/leaderboards-icon.svg';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state =({
      key: '/'
    })
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key){
    this.setState({
      key: key
    })
  }

  checkRoute(eventKey) {
    return this.state.key === eventKey ? 'active' : null;
  }

  render() {
    return(
      <Navbar sticky='top' expand={'lg'} bg='white' onSelect={this.handleSelect}>
        <Container fluid className='navbar shadow-sm'>
          
        {/* Branding  */}
          <Navbar.Brand as={Link} to='/home' 
            onClick={this.handleSelect}
            eventKey='/home'>
            <img
                src={logo}
                width='200'
                height='50'
                className='ms-5 me-3'
                alt='Logo'
            />
          </Navbar.Brand>
          
        {/* Offcanvas navigation */}
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <Nav.Link as={Link} to='/design-your-firm' 
                eventKey='/design-your-firm' 
                className={`nav-link-bold nav-link-offcanvas ${this.checkRoute('/design-your-firm')}`}>
                  Design Your Firm</Nav.Link>

              <Nav.Link as={Link} to='/run-your-firm' 
                eventKey='/run-your-firm' 
                className={`nav-link-bold nav-link-offcanvas ${this.checkRoute('/run-your-firm')}`}>
                  Run Your Firm</Nav.Link>

              <Nav.Link as={Link} to='/explore' 
                eventKey='/explore' 
                className={`ms-auto nav-link-light nav-link-offcanvas ${this.checkRoute('/explore')}`}>
                <img
                  src={mapicon}
                  width='20'
                  height='20'
                  className='me-2'
                  alt='Three dots'
                />
                Explore</Nav.Link>

              <Nav.Link as={Link} to='/leaderboards' 
                eventKey='/leaderboards' 
                className={`nav-link-light nav-link-offcanvas ${this.checkRoute('/leaderboards')}`}>
                <img
                  src={leaderboardsicon}
                  width='20'
                  height='20'
                  className='me-2'
                  alt='Three dots'
                />
                Leaderboards</Nav.Link>

              <Nav.Link as={Link} to='/view-teams' 
                  eventKey='/view-teams'
                  className={`nav-link-light nav-link-offcanvas ${this.checkRoute('/view-teams')}`}>
                <img
                  src={peopleicon}
                  width='20'
                  height='20'
                  className='me-1'
                  alt='People Icon'
                />
                View Teams</Nav.Link>

              <Nav.Link as={Link} to='/help' 
                  eventKey='/help'
                  className={`nav-link-light nav-link-offcanvas ${this.checkRoute('/help')}`}>
                <img
                  src={helpicon}
                  width='25'
                  height='25'
                  className='me-1'
                  alt='Help'
                />
                Help / FAQs</Nav.Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        {/* Main Nav Bar */}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' className='d-none' />
          <div class='vr me-3 mt-1 mb-1 d-none d-xl-block d-l-block'></div>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav.Link as={Link} to='/design-your-firm' 
              eventKey='/design-your-firm' 
              className={`nav-link-bold d-none d-md-block d-l-block d-xl-block ${this.checkRoute('/design-your-firm')}`}>
                Design Your Firm</Nav.Link>

            <Nav.Link as={Link} to='/run-your-firm' 
              eventKey='/run-your-firm' 
              className={`nav-link-bold d-none d-md-block d-l-block d-xl-block  ${this.checkRoute('/run-your-firm')}`}>
                Run Your Firm</Nav.Link>

            <Nav.Link as={Link} to='/explore' 
              eventKey='/explore' 
              className={`ms-auto nav-link-light d-none d-md-block d-l-block d-xl-block ${this.checkRoute('/explore')}`}>
              <img
                src={mapicon}
                width='20'
                height='20'
                className='me-2'
                alt='Map Icon'
              />
              Explore</Nav.Link>

            <Nav.Link as={Link} to='/leaderboards' 
              eventKey='/leaderboards' 
              className={`nav-link-light d-none d-md-block d-l-block d-xl-block ${this.checkRoute('/leaderboards')}`}>
              <img
                src={leaderboardsicon}
                width='20'
                height='20'
                className='me-2'
                alt='Leaderboard Icon'
              />
              Leaderboards</Nav.Link>

          {/* Dropdown within main nav bar */}
            <NavDropdown
              title={
                <img
                  src={threedotsicon}
                  width='25'
                  height='25'
                  className='me-5 d-none d-md-block d-l-block d-xl-block'
                  alt='Three dots'
                />
              }
              align='end'>
              <NavDropdown.Item as={Link} to='/view-teams' eventKey='/view-teams'>
                <img
                  src={peopleicon}
                  width='20'
                  height='20'
                  className='me-1'
                  alt='People Icon'
                  />
                View Teams</NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/help' eventKey='/help'>
                <img
                  src={helpicon}
                  width='25'
                  height='25'
                  className='me-1'
                  alt='Help'
                  />
                Help / FAQs</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    );
  }
}

export default Navigation;