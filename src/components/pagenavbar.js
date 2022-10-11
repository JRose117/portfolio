import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavDropdown } from 'react-bootstrap'


const PageNavbar = () => {
  return (
    <Navbar expand='md' sticky='top' variant="dark" >
      <Container as='section'>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <div className='nav-home'>
            <Nav.Link href="/#about-break">  Joe Rose </Nav.Link>
              </div>
              <div className='nav-other'>
                <Nav.Link href="/#about-break"> About </Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#project4-break">Project 4</NavDropdown.Item>
              <NavDropdown.Item href="/#project3-break">Project 3</NavDropdown.Item>
              <NavDropdown.Item href="/#project2-break">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="/#project1-break">Project 1</NavDropdown.Item>
            </NavDropdown>         
            <Nav.Link href="/#skills-break"> Skills </Nav.Link>
            <Nav.Link href="/#interests-break"> Interests </Nav.Link>
            <Nav.Link href="/#contact-break"> Contact </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar