import { useLoaderData, Link } from "react-router-dom"
import { GiCrossedSwords } from "react-icons/gi"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SinglePlace() {

  const loadedData = useLoaderData()
  console.log(loadedData)
  const { charactersInPlace, description, image, name, occupiedBy, occupyingHouses, region } = loadedData
  function scrollUp() {
    document.documentElement.scrollTop = 0
  }

  return (
    <Container fluid className={`${occupyingHouses.length > 0 ? occupyingHouses[0].houseName : "general"}-container`}>
      <Link className="index-return" to={`/places`}><GiCrossedSwords /></Link>
      <Row xs={12} md={12} lg={12}>
        <Col>
        <h2> {name}</h2>
        <h3>({region})</h3>
        </Col>
      </Row>
      <Row xs={12} md={12} lg={12}>
        <Col>
        <p>{description}</p>
        </Col>
      </Row>
      <Row className="main-image-container" xs={12} md={12} lg={12}>
        <Col xs={12} md={12} lg={12}>
          <div className="main-image">
            <img className='region-single' src={image} alt={`Image of ${name}`} />
          </div>
        </Col>
      </Row>
      <Row xs={12} md={12} lg={12}>
          <Col>
            {occupyingHouses.length > 0 &&
              <div className="occupying-house">
                <h3>{name} has been occupied by {occupyingHouses.length} {occupyingHouses.length < 2 ? "house" : "houses"}:</h3>
                <div className="occupier">
                  {occupyingHouses.map((house, idx) => {
                    return <Link onClick={scrollUp} className="house-link" key={idx} to={`/houses/${house.id}`}>
                      <div>
                        <div className="individual-houses">
                          <h2 className="house-picture-link" style={ {backgroundImage: `url(${house.crest})`} }>{`${house.houseName}`}</h2>
                        </div>
                      </div>
                    </Link>
                  })}
                </div>
              </div>
            }
          </Col>
        </Row>
        <Row xs={12} md={12} lg={12}>
          <Col>
            {charactersInPlace.length > 0 &&
              <div className="stained-glass">
                <h3>Related Characters</h3>
                <div className="house-member-container">
                  {charactersInPlace.map((character, idx) => {
                    return <Link onClick={scrollUp} className="house-member" key={idx} to={`/characters/${character.id}`}>
                      <div>
                        <div className="individual">
                          <h2>{`${character.firstName} ${character.lastName}`}</h2>
                          <img className='individual-picture' src={character.image} alt={`Image of ${character.firstName} ${character.lastName}`} />
                        </div>
                      </div>
                    </Link>
                  })}
                </div>
              </div>
            }
          </Col>
        </Row>
    </Container>
  )
}