import { Link, useNavigate } from 'react-router-dom'

// bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

// helpers
import { removeToken, activeUser } from '../utils/helpers/common'


// Image
import wolf from '../images/wolf-logo.png'

export default function NavbarFunction(){

  const navigate = useNavigate()

  function handleLogOut(){
    removeToken()
    navigate('/')
  }

  return (
    <>
        <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Link to="/"><img className='logo-icon' src={wolf} alt="Stark Wolf" /></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Browse
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/houses">Houses</Nav.Link>
                  <Nav.Link href="/characters">Characters</Nav.Link>
                  <Nav.Link href="/characters">Places</Nav.Link>
                  {activeUser() ? 
                  <>
                  <Nav.Link href="/profile">Profile Page</Nav.Link>
                  <Nav.Link href="/create">Create A Character</Nav.Link>
                  <span onClick={handleLogOut}>Log Out</span>
                  </>
                  :
                  <>
                  <Nav.Link href="Register">Register</Nav.Link>
                  <Nav.Link href="Login">Login</Nav.Link>
                  </>
                  }
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
  )

}