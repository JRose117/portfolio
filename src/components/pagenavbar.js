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
            <Nav.Link href="#about-break"> Joe Rose </Nav.Link>
          </div>
          <div className='nav-other'>
            <Nav.Link href="#about-break"> About </Nav.Link>
            <Nav.Link href="#projects-break"> Projects </Nav.Link>
            <Nav.Link href="#skills-break"> Skills </Nav.Link>
            <Nav.Link href="#interests-break"> Interests </Nav.Link>
            <Nav.Link href="#contact-break"> Contact </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar