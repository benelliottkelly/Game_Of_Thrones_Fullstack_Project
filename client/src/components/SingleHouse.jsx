import { useLoaderData, Link } from "react-router-dom"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function SingleHouse() {

  const houses = useLoaderData()
  console.log(houses)
  const { bannermen, characters, crest, description, houseName, motto, places } = houses
  const { name } = places[0]

  console.log(places)

  function matchOccupiedToHome(){

  }

  function scrollUp() {
    document.documentElement.scrollTop = 0
  }

  return (
    <Container fluid>
      <h2>{`House ${houseName}`}</h2>
      <Row className="split-page" xs={12} md={12} lg={12}>
        <Col className="column" xs={12} md={12} lg={12}>
          <div className="crest-container">
            <img className="crest" src={crest} alt={`Image of the ${houseName} family crest`} />
          </div>
        </Col>
      </Row>
      <Row className="split-page" xs={12} md={12} lg={12}>
        <Col className="column" xs={12} md={6} lg={6}>
          <h2>{motto}</h2>
        </Col>
        <Col className="column" xs={12} md={6} lg={6}>
          <h3>Family home: {<Link to={`/places/${places[0].id}`}>{ name }</Link>} </h3>
          <p>{description}</p>
        </Col>
      </Row>
      <Row className="p-5" xs={12} md={12} lg={12}>
          <Col>
            {characters.length > 0 &&
              <div className="character-text">
                <h3>House Members</h3>
                <div className="house-member-container">
                  {characters.map((character, idx) => {
                    return <Link onClick={scrollUp} className="house-member" key={idx} to={`/characters/${character.id}`}>
                      <div>
                        <div className="individual-relationships">
                          <h2>{`${character.firstName} ${character.lastName}`}</h2>
                          <img className='relationship-picture' src={character.image} alt={`Image of ${character.firstName} ${character.lastName}`} />
                        </div>
                      </div>
                    </Link>
                  })}
                </div>
              </div>
            }
          </Col>
        </Row>
        <Row className="p-5" xs={12} md={12} lg={12}>
          <div className="character-text">
            <h3>Bannermen</h3>
            <ul>
              {bannermen.length > 0 && bannermen.map((banner, idx) => {
                return <li key={idx}>{banner}</li>
              })}
            </ul>
          </div>
        </Row>
    </Container>
  )
}