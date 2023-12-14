import { Link, useNavigate } from 'react-router-dom'
import NavBarSearch from './NavbarSearch'
import { useState } from 'react'

// bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



// helpers
import { removeToken, activeUser, getToken } from '../utils/helpers/common'


// Image
import wolf from '../images/wolf-logo.png'

export default function NavbarFunction() {

  const [show, setShow] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLog = () => setShowLog(false)
  const handleShowLog = () => setShowLog(true);

  const userId = activeUser()

  const navigate = useNavigate()

  function handleLogOut() {
    removeToken()
    navigate('/')
  }

  function checkToken() {
    console.log(userId)
    if (userId) {
      const token = getToken()
      const b64 = token.split('.')[1]
      const payload = JSON.parse(atob(b64))
  
      const now = Date.now() / 1000
      const exp = payload.exp

      if (exp > now) {
        console.log('All good')
      } else {
        handleShowLog()
      }
    } else {
      console.log('No active user')
      handleShowLog()
    }
  }

  function closeNav() {
    document.querySelector('.offcanvas-header .btn-close').click()
  }


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="log-out-title">Log Out?</Modal.Title>
        </Modal.Header>
        <Modal.Body><span className="log-out-text">Are you sure you want to log out?</span>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Remain logged in
          </Button>
          <Button variant="danger" onClick={() => {
            handleClose()
            handleLogOut()
          }}>Log Out</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showLog}
        onHide={handleCloseLog}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="log-out-title">Logged Out</Modal.Title>
        </Modal.Header>
        <Modal.Body><span className="log-out-text">Your token has expired. Please log back in to regain access to advanced features</span>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            handleCloseLog()
            closeNav()
            navigate('/')
            }}>
            Continue Browsing
          </Button>
          <Button variant="success" onClick={() => {
            handleCloseLog()
            closeNav()
            navigate('/login')
          }}>Log In</Button>
        </Modal.Footer>
      </Modal>

      <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Link to="/"><img className='logo-icon' src={wolf} alt="Stark Wolf" /></Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Browse
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="nav-option" href="/houses">Houses</Nav.Link>
                <Nav.Link className="nav-option" href="/characters">Characters</Nav.Link>
                <Nav.Link className="nav-option" href="/places">Places</Nav.Link>
                {userId ?
                  <>
                    <Nav.Link onClick={() => {
                      closeNav()
                      checkToken()
                      navigate(`/users/${userId}`)
                    }} className="nav-option"> Profile Page</Nav.Link>
                    <Nav.Link onClick={() => {
                      checkToken()
                      navigate('/characters/create')
                      closeNav()
                      }} className="nav-option">Create A Character</Nav.Link>
                    <span className="log-out-button" onClick={() => {
                      closeNav()
                      handleShow()
                      checkToken()
                    }}

                    >Log Out</span>
                  </>
                  :
                  <>
                    <Nav.Link className="nav-option" href="/register">Register</Nav.Link>
                    <Nav.Link className="nav-option" href="/login">Login</Nav.Link>
                  </>
                }
              </Nav>
              <NavBarSearch />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  )

}