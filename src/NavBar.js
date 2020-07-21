import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from './logo.svg';

const NavBar = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        );

        localStorage.clear();
    }

    return (
        <div>

          <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="/">
              <img src={logo} width="30" height="30" 
              className="d-inline-block align-top" 
              alt="" 
              loading="lazy"/>VirtuARTlity</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Overview" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Who we are</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">What we do</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Why we do it</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Gallery" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Still life</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Landscapes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Portraits</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Abstracts</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Sculptures</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#artists">Artists</Nav.Link>
                <NavDropdown title="Events" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Exhibitions</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Viewings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Webinars</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Interviews</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#artists">News</Nav.Link>
              </Nav>
              <Nav>
                <div style={{display: 'flex'}}>
                  {
                      globalState.loggedIn === false && <Link
                      to="/login"
                      className="btn btn-primary">
                          Log In / Register
                      </Link>
                  }
                  {
                      globalState.loggedIn === true && 
                      <button onClick={logOut}
                      className="btn btn-danger">
                          Log Out
                      </button>
                  }
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </div>
    );
}

export default NavBar;