import { useLoaderData, useNavigation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Filter from './Filters'



export default function AllPlaces() {

    const [ isOpen, setIsOpen ] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    const [places, setPlaces] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])

    const navigation = useNavigation()
    const location = useLoaderData()

    useEffect(() => {
        setPlaces(location)
    }, [location])

    return (
        <>
            <h1>All Places</h1>
           
            <Container fluid>
            <button className="btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
                <Row>
                    <Col
                        xs={4}
                        md={3}
                        lg={3}
                        className="collapse">
                            
                            <Filter places={places} setFilteredPlaces={setFilteredPlaces} />
                           
                            </Col>
                    <Col>
                        <section className="card-layout">
                            {filteredPlaces.map(place => {
                                return (
                                    <>
                                        <Link to={`/places/${place.id}`} style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}>
                                            <Card className="card" key={place.id}>
                                                <Card.Img variant="top" className="card-img-top" src={place.image} alt="Crest Image" />
                                                <Card.Body className="card-body">
                                                    <Card.Title className="card-title">{place.name}</Card.Title>
                                                    <Card.Text className="card-text">{place.region}</Card.Text >
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </>
                                )
                            })
                            }
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}