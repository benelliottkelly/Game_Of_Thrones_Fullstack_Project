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
      <Container fluid>
        <Row className="split-page" xs={12} md={12} lg={12}>
          <Col className="column" xs={12} md={6} lg={6}>
            <img className='picture-single' src={image} alt={`Image of ${firstName} ${lastName}`} />
            <img className='crest-single p-1' src={crest} alt={`${house} family crest`} />
          </Col>
          <Col className="column column-right" xs={12} md={6} lg={6}>
            <div className="throne-background">
              <h2>{firstName} {lastName}</h2>
              <h3>House {house}</h3>
              <article className="description">
                <h3>Bio:</h3>
                <h4>{biography}</h4>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}