import { useLoaderData, useNavigation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Filter from './Filters'

export default function AllPlaces() {

    const [ places, setPlaces ] = useState([])
    const [ filteredPlaces, setFilteredPlaces ] = useState([])

    const navigation = useNavigation()
    const location = useLoaderData()

    useEffect(() => {
        setPlaces(location)
    }, [location])

    return (
        <>
            <h1>All Places</h1>
            <Container fluid>
                <Row>
                    <Col 
                    xs={4} 
                    md={3} 
                    lg={3}><Filter places={places} setFilteredPlaces={setFilteredPlaces}/></Col>
                    <Col>
                        <section className="card-layout">
                            {filteredPlaces.map(place => {
                                return (
                                    <>
                                        <Link to={`/places/${place.id}`} style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}>
                                            <div className="card" key={place.id}>
                                                <img className="card-img-top" src={place.image} alt="Place Image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{place.name}</h5>
                                                    <p className="card-text">{place.region}</p>
                                                </div>
                                            </div>
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