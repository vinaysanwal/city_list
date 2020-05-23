import React , {Fragment} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'

const Navbar1 = ({ auth: 
  {isAuthenticated , loading} ,logout })=> {
  
  const authLinks = (
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
  </Nav>
  <Nav>
     <NavDropdown title="MyProfile" id="collasible-nav-dropdown">
        <NavDropdown.Divider />
        <NavDropdown.Item  onClick={logout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
 
   );

   const guesLinks = (
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
  </Nav>
    <Nav>
    <Link to="/login" className="btn btn-primary">Get Started</Link>
    </Nav>
    </Navbar.Collapse>
   );
  
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand><Link to="/">
    <img className="rotate" src="http://www.vitorazevedo.net/external_files/loading_small.png" alt="navbar"/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
    { !loading && 
      (<Fragment>
      {isAuthenticated ? authLinks : guesLinks}
      </Fragment>
     )}
</Navbar>
    )
}

Navbar1.propTypes = {
  logout: PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps , { logout })(Navbar1)