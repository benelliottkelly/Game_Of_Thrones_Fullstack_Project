import { useLoaderData, Link } from "react-router-dom"
import { GiCrossedSwords } from "react-icons/gi"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SingleCharacter() {

  const loadedData = useLoaderData()
  const { singleCharacter, allCharacters } = loadedData
  const { firstName, lastName, battles, biography, house, hometown, image, associatedHouse } = singleCharacter
  const { crest } = associatedHouse[0]
  const relationships = []
  console.log(loadedData)

  function scrollUp() {
    document.documentElement.scrollTop = 0
  }


  function findHouse() {
    const results = allCharacters.filter((character) => {
      if ((character.firstName !== firstName) && (character.house === house)) {
        relationships.push(character)
      }
    })
  }
  findHouse()

  return (
    <>
      <Container fluid className={`${house}-container`}>
        <Link className="index-return" to={`/characters`}><GiCrossedSwords /></Link>
        <Row className="split-page" xs={12} md={12} lg={12}>
          <Col className="column" xs={12} md={4} lg={4}>
            <div className="pictureFrame">
              <img className='picture-single' src={image} alt={`Image of ${firstName} ${lastName}`} />
            </div>
          </Col>
          <Col className="column column-right" xs={12} md={8} lg={8}>
            <div className="stained-glass">
              <h2>{firstName} {lastName}</h2>
              <h3>House {house}</h3>
              <h4>Home: {hometown}</h4>
              <article className="description">
                <h3>Bio:</h3>
                <p>{biography}</p>
              </article>
            </div>
          </Col>
        </Row>
        <Row xs={12} md={12} lg={12}>
          <Col xs={12} md={12} lg={12}>
              <Link onClick={scrollUp} className="banner-container" to={`/houses/${associatedHouse[0].id}`}>
                <img className='crest-single' src={crest} alt={`${house} family crest`} />
              </Link>
          </Col>
        </Row>
        <Row className="p-5" xs={12} md={12} lg={12}>
          <div className="stained-glass">
            <h3>Key Battles</h3>
            <ul>
              {battles.length > 0 && battles.map((battle, idx) => {
                return <li key={idx}>{battle}</li>
              })}
            </ul>
          </div>
        </Row>
        <Row className="p-5" xs={12} md={12} lg={12}>
          <Col>
            {relationships.length > 0 &&
              <div className="stained-glass">
                <h3>House Members</h3>
                <div className="house-member-container">
                  {relationships.map((relationship, idx) => {
                    return <Link onClick={scrollUp} className="house-member" key={idx} to={`/characters/${relationship.id}`}>
                      <div>
                        <div className="individual">
                          <h2>{`${relationship.firstName} ${relationship.lastName}`}</h2>
                          <img className="individual-picture" src={relationship.image} alt={`Image of ${relationship.firstName} ${relationship.lastName}`} />
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
    </>
  )
}