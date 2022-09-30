import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const PageNavbar = () => {
  return (
    <Navbar expand='md' sticky='top'>
      <Container as='section'>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <div className='nav-home'>
            <Nav.Link as={Link} to='/'> Joe Rose </Nav.Link>
          </div>
          <div className='nav-other'>
            <Nav.Link as={Link} to='/Projects'> LinkedIn </Nav.Link>
            <Nav.Link as={Link} to='/Projects'> GitHub </Nav.Link>
            <Nav.Link as={Link} to='/Projects'> Email </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar