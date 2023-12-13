import { useLoaderData, Link } from "react-router-dom"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Profile(){
  console.log('Hit profile route')

  const userInfo = useLoaderData()
  const { username, email, characterCreated } = userInfo




  return (
    <>
      <Container fluid className="profile-container">
        <Row>
          <Col sm="4">
            <div className="account-info">
              <h1>Account Info</h1>
              <h2>Username: {username}</h2>
              <h2>Email: {email}</h2>
              </div>
          </Col>
          <Col sm="8">
          <div className="character-list-container">
            <h2>Characters Created</h2>
            <div className="character-list">
              {characterCreated.map((character) => (
                <div key={character._id} className="character-item">
                  <Link to={`/characters/${character._id}`} rel="noreferrer">
                  <img src={character.image} alt={`${character.firstName} ${character.lastName}`} style={{ maxWidth: "100px", maxHeight: "100px"}} />
                  <p>{`${character.firstName} ${character.lastName}`}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )

}