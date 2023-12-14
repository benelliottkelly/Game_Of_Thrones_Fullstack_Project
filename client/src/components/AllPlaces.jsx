import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Filter from './Filters'
import Map from './Map'



export default function AllPlaces() {

  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])

  function scrollUp() {
    document.documentElement.scrollTop = 0
  }

  const location = useLoaderData()

  useEffect(() => {
    setPlaces(location)
  }, [location])

  return (
    <>
      <div className='color-container'>
        <h1 className="index-h1">All Places</h1>

        <Container fluid>
            <Col>
            
              <Row>
                <div className="map-filt">
                <Col
              xs={12}
              md={4}
              lg={3}
              className="filter">
              <Filter places={places} setFilteredPlaces={setFilteredPlaces} filteredPlaces={filteredPlaces} />
            </Col>
            <Map />
            </div>
              </Row>
              <Row>
                <section className="card-layout">
                  {filteredPlaces.map(place => {
                    return (
                      <>
                        <Link onClick={scrollUp} key={place.id} to={`/places/${place.id}`} style={{
                          textDecoration: 'none',
                          color: 'black'
                        }}>
                          <Card className="card">
                            <Card.Img variant="top" className="card-img-top" src={place.image} alt="Crest Image" />
                            <Card.Body className="card-body">
                              <Card.Title className="card-title">{place.name}</Card.Title>
                              <Card.Text className="card-text"><h6>{place.region}</h6>{place.description}</Card.Text >
                            </Card.Body>
                          </Card>
                        </Link>
                      </>
                    )
                  })
                  }
                </section>
              </Row>
            </Col>
        </Container>
      </div>
    </>

  )
}