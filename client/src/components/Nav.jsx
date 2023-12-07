import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

// Image
import wolf from '../images/wolf-logo.png'

export default function Nav(){

  // State
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(show)
  }, [show])

  return (
    <>
    <header className='p-2 p-md-3 p-lg-4'>
        <Link to="/"><img className='logo' src={wolf} alt="Stark Wolf" /></Link>
        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setShow(false)}>
            <Link to="/register"></Link>
            <Link to="/places">Places</Link>
            <Link to="/houses">Houses</Link>
            <Link to="/characters">Characters</Link>
          </nav>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  )

}