import { useLoaderData } from "react-router-dom"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SingleCharacter() {

  const character = useLoaderData()
  const { firstName, lastName, battles, biography, house, hometown, image, associatedHouse } = character
  const { crest } = associatedHouse[0]

  return (
    <>
      <Container fluid className={`${house}-character-container`}>
        <Row className="split-page" xs={12} md={12} lg={12}>
          <Col className="column" xs={12} md={6} lg={6}>
            <div className="pictureFrame">
              <img className='picture-single' src={image} alt={`Image of ${firstName} ${lastName}`} />
            </div>
            <div className="banner-container">
              <img className='crest-single' src={crest} alt={`${house} family crest`} />
            </div>
          </Col>
          <Col className="column column-right" xs={12} md={6} lg={6}>
            <div className="character-text">
              <h2>{firstName} {lastName}</h2>
              <h3>House {house}</h3>
              <h4>Home: {hometown}</h4>
              <article className="description">
                <h3>Bio:</h3>
                <h4>{biography}</h4>
              </article>
            </div>
            <div className="character-text">
              <h3>Key Battles</h3>
              <ul>
                {battles.length > 0 && battles.map((battle, idx) => {
                  return <li key={idx}>{battle}</li>
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}