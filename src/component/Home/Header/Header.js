import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/logo.png';
const Header = () => {
      const { user, logout } = useAuth();
      return (
            <div className="container mb-5">
                  <Navbar style={{ background: "#56D5C4" }} variant="dark" collapseOnSelect expand="lg">
                        <Container>
                              <Navbar.Brand as={Link} to="/home"> <img style={{ width: '70px' }} src={img} /> </Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link as={NavLink} style={{ color: 'white' }} to="/home">Home</Nav.Link>
                                    {user.email ? <Nav.Link as={NavLink} style={{ color: 'white' }} to="/myBookings">My Bookings</Nav.Link> : ''}
                                    {user.email ? <Nav.Link as={NavLink} style={{ color: 'white' }} to="/allOrder">Manage All Booking</Nav.Link> : ''}
                                    {user.email ? <Nav.Link as={NavLink} style={{ color: 'white' }} to="/addOffer">Add A New Offer</Nav.Link> : ''}

                                    {user.email ? <button className="btn btn-light" onClick={logout}>Logout</button> : <NavLink to="/login"><button className="btn btn-light">LogIn</button></NavLink>
                                    }
                                    <Navbar.Text>
                                          {user.email && <span className="ms-1 fw-bold text-white">Signed in as:{user.displayName}</span>}
                                    </Navbar.Text>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;